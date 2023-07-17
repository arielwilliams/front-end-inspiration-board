import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewBoardForm.css";

const initialBoardFormData = {
  title: '',
  owner: '',
  board_id: ''
};

function NewBoardForm(props) {
    const [boardFormData, setBoardFormData] = useState(INITIAL_FORM_DATA_FOR_BOARD);
  
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
      console.log('Successfully pressed add new board');
    }
  
    return (
      <section className="Board">
        <h2>Create New Board</h2>
        <form className="stack" onSubmit={handleFormSubmit}>
          <label htmlFor="boardTitle">Title:</label>
          <input
            id="boardTitle"
            type="text"
            className="invalid-form-input"
            onBlur={(evt) => anInputChanged(evt, 'title') } // onBlur calls anonymous func that then calls anInputChanged func. You pass in the evt into func, that other func manages use state.
            // func anInputChanged responds to onBlur when we LEAVE that form element text box
            // you LITERALLY have to get off of it/change focus in order to UPDATE value in text box
          />
          <section>
          <label htmlFor="board">Owner Name: </label>
          <input
            id="board"
            type="text"
            className="invalid-form-input"
            onBlur={(evt) => anInputChanged(evt, 'owner') }
          />  </section>
         
      
          <label htmlFor="boardPreview">Preview:</label>
          <p>
          {boardFormData.title} - {boardFormData.owner}
          </p>
          <div className ='submit-form'>
          <input type="submit" value="Add new Board" 
                  className='btn'
                  disabled={message.length === 0 || message.length > 40}></input>
          </div>
        </form>
      </section>
    )
  }
  
  NewBoardForm.propTypes = {
    createNewBoard: PropTypes.func.isRequired
  }
  
  export default NewBoardForm;