import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewBoardForm.css";

const INITIAL_FORM_DATA = {
  title: '',
  owner: '',
  preview: '',
  board_id: ''
};

function NewBoardForm(props) {
    const [boardFormData, setBoardFormData] = useState(INITIAL_FORM_DATA);
  
    const anInputChanged = (evt, key) => {

      console.log(evt)
  
      // if (evt.target.owner === "owner" && evt.target.value < 0) {
      //   return
      // }
      
      const newBoardFormData = {
        ...boardFormData,
        [key]: evt.target.value
      };
  
      setBoardFormData(newBoardFormData);
    }
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      // props.createNewBoardForm(boardFormData);
      // setBoardFormData(INITIAL_FORM_DATA);
      console.log('hello world');
    }
  
    return (
      <section className="Board">
        <h2>Create New Board</h2>
        <form className="stack" onSubmit={handleFormSubmit}>
          <label htmlFor="boardTitle">Title:</label>
          <input
            id="boardTitle"
            type="text"
            onBlur={(evt) => anInputChanged(evt, 'title') } // onBlur calls anonymous func that then calls anInputChanged func. You pass in the evt into func, that other func manages use state.
            // func anInputChanged responds to onBlur when we LEAVE that form element text box
            // you LITERALLY have to get off of it/change focus in order to UPDATE value in text box
          />
          <label htmlFor="board">Owner Name:</label>
          <input
            id="board"
            type="text"
            onBlur={(evt) => anInputChanged(evt, 'owner') }
          />
          <label htmlFor="boardPreview">Preview:</label>
          <p>
          {boardFormData.title} - {boardFormData.owner}
          </p>
      
          <input type="submit" value="Add new Board"></input>
        </form>
      </section>
    )
  }
  
  NewBoardForm.propTypes = {
    createNewBoard: PropTypes.func.isRequired
  }
  
  export default NewBoardForm;