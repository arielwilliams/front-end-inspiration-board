import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewBoardForm.css";

const INITIAL_FORM_DATA = {
  title: '',
  owner: '',
  board_id: ''
};



function NewBoardForm(props) {
    const [boardFormData, setBoardFormData] = useState(INITIAL_FORM_DATA);
  
    const anInputChanged = (evt) => {
  
      if (evt.target.owner === "owner" && evt.target.value < 0) {
        return
      }
  
      const newBoardFormData = {
        ...boardFormData,
        [evt.target.owner]: evt.target.value
      };
  
      setBoardFormData(newBoardFormData);
    }
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      props.createNewBoardForm(boardFormData);
      setBoardFormData(INITIAL_FORM_DATA);
    }
  
    return (
      <section className="Board">
        <h2>Create New Board</h2>
        <form className="stack" onSubmit={handleFormSubmit}>
          <label htmlFor="boardTitle">Title:</label>
          <input
            id="boardTitle"
            owner="owner"
            type="text"
            value={ boardFormData.owner }
            onChange={ anInputChanged }
          />
          <label htmlFor="board">Owner Name:</label>
          <input
            id="board"
            owner="owner"
            type="string"
            value={ boardFormData.owner }
            onChange={ anInputChanged }
          />
          <label htmlFor="boardPreview">Preview:</label>
          <input
            id="boardPreview"
            owner="owner"
            type="text"
            value={ boardFormData.owner }
            onChange={ anInputChanged }
          />
          <input type="submit" value="Add new Board"></input>
        </form>
      </section>
    )
  }
  
  NewBoardForm.propTypes = {
    createNewBoard: PropTypes.func.isRequired
  }
  
  export default NewBoardForm;