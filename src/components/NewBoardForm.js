import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewBoardForm.css";
import Board from "./Board";

const initialBoardFormData = {
  title: "",
  owner: "",
};

function NewBoardForm(props) {
  const [boardFormData, setBoardFormData] = useState(initialBoardFormData);

  const [isVisible, setIsVisible] = useState(true);

  const toggleBoardFormState = () => {
    setIsVisible(!isVisible);
    // if form is visible the name of the button should be "hide"
    // if form is not visible the name of the button should be "show"

    // onClick toggle ... if true then isVisible

    console.log("hide it button clicked");
  };

  // make css class rule to outermost tag for if visible (display None)
  // have class display whatever block we want.
  // *********** toggle css class in the outermost JSX ************
  // move this logic to a higher up component, to whatever component is rendering NewBoardForm ***

  const newBoardFormData = (event) => {
    setBoardFormData({
      ...boardFormData,
      [event.target.name]: event.target.value,
    });
    console.log("new board form", boardFormData);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    props.createNewBoard(boardFormData);
    console.log("handle form", boardFormData);
    setBoardFormData({
      title: "",
      owner: "",
    });
    // setBoardFormData(boardFormData);

    // props.createNewBoardForm(boardFormData);
    // setBoardFormData(setBoardFormData);
    console.log("Successfully pressed add new board");
  };

  return (
    <section className="Board">
      <h2>Create New Board</h2>
      {isVisible ? (
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            id="boardTitle"
            name="title"
            type="text"
            value={boardFormData.title}
            required
            className="invalid-form-input"
            onChange={newBoardFormData}
          />
          <section>
            <label htmlFor="owner">Owner Name: </label>
            <input
              id="board"
              name="owner"
              type="text"
              value={boardFormData.owner}
              required
              className="invalid-form-input"
              onChange={newBoardFormData}
            />{" "}
          </section>

          <label htmlFor="boardPreview">Preview:</label>
          <p>
            {boardFormData.title} - {boardFormData.owner}
          </p>

          <div className="submit-form">
            <input
              type="submit"
              value="Add new Board"
              className="btn"
              // disabled={title.length === 0 || title.length > 40}
            ></input>
          </div>
        </form>
      ) : null}
      <span>
        <button
          type="button"
          onClick={toggleBoardFormState}
          value="isVisible"
          className="new-board-form__toggle-btn"
        >
          {isVisible ? "Hide New Board Form" : "Show New Board Form"}
        </button>
      </span>
    </section>
  );
}

NewBoardForm.propTypes = {
  createNewBoard: PropTypes.func.isRequired,
};

export default NewBoardForm;
