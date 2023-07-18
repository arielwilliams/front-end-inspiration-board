import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewBoardForm.css";
import Board from "./Board";

const initialBoardFormData = {
  title: '',
  owner: ''
};

function NewBoardForm(props) {
    const [boardFormData, setBoardFormData] = useState(initialBoardFormData);
    // const NewBoardForm = (props) => {
    
      // const anInputChanged = (event) => {}
// 
      // console.log(event)
  
      // this might have to do with preview so come back to this later for that feature
      // if (event.target.owner === "owner" && event.target.value < 0) {
      //   return
      // }
      
      const newBoardFormData = event => {
        setBoardFormData({...boardFormData,
        [event.target.name]: event.target.value,
        });
        console.log('new board form',boardFormData )
      // setBoardFormData(newBoardFormData);
    };
  
    const handleFormSubmit = event => {
      event.preventDefault();
      // new attempt
      props.createNewBoard(boardFormData);
      console.log('handle form',boardFormData )
      setBoardFormData({
        title:'',
        owner:''});
      // setBoardFormData(boardFormData);

      // props.createNewBoardForm(boardFormData);
      // setBoardFormData(setBoardFormData);
      console.log('Successfully pressed add new board');
    };
  
    return (
      <section className="Board">
        <h2>Create New Board</h2>
        <form className="stack" onSubmit={handleFormSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            id="boardTitle"
            name="title"
            type="text"
            className="invalid-form-input"
            onChange={newBoardFormData} // onBlur calls anonymous func that then calls anInputChanged func. You pass in the evt into func, that other func manages use state.
            // func anInputChanged responds to onBlur when we LEAVE that form element text box
            // you LITERALLY have to get off of it/change focus in order to UPDATE value in text box
          />
          <section>
          <label htmlFor="owner">Owner Name: </label>
          <input
            id="board"
            name="owner"
            type="text"
            className="invalid-form-input"
            onChange={newBoardFormData}
          />  </section>
      
          <label htmlFor="boardPreview">Preview:</label>
          <p>
          {boardFormData.title} - {boardFormData.owner}
          </p>
          <div className ='submit-form'>
          <input type="submit" value="Add new Board" 
                  className='btn'
                  // disabled={title.length === 0 || title.length > 40}
                  >
          </input>
          </div>
        </form>
      </section>
    )
  }
  
  NewBoardForm.propTypes = {
    createNewBoard: PropTypes.func.isRequired
  }
  
  export default NewBoardForm;