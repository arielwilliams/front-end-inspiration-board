import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewCardForm.css";

const INITIAL_FORM_DATA_FOR_CARD = {
  message: '',
  card_id: '',
};

function NewCardForm(props) {
    const [cardFormData, setCardFormData] = useState(INITIAL_FORM_DATA_FOR_CARD);
  
    const anInputChanged = (evt, key) => {

      console.log(evt)
      
      const newCardFormData = {
        ...cardFormData,
        [key]: evt.target.value
      };
  
      setCardFormData(newCardFormData);
    }
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      // props.createNewBoardForm(cardFormData);
      // setCardFormData(INITIAL_FORM_DATA);
      console.log('Successfully pressed add new card');
    }
  
    return (
      <section className="Card">
        <div className="card-div">
        <h2>Create New Card</h2>
        <form className="stack" onSubmit={handleFormSubmit}>
          <label htmlFor="cardMessage">Message:</label>
          <input
            id="cardMessage"
            type="text"
            className="invalid-form-input"
            onBlur={(evt) => anInputChanged(evt, 'message') } // onBlur calls anonymous func that then calls anInputChanged func. You pass in the evt into func, that other func manages use state.
            // func anInputChanged responds to onBlur when we LEAVE that form element text box
            // you LITERALLY have to get off of it/change focus in order to UPDATE value in text box
          />
          <section>
          <label htmlFor="cardPreview">Preview:</label>
          <p>
          {cardFormData.message} 
          </p>
          
          <input type="submit" value="Add new Card" 
                 className='btn'
                //  disabled={message.length === 0 || message.length > 40}
                 >
          </input>
          </section>
          
        </form>
        </div>
      </section>
    )
  }
  
  NewCardForm.propTypes = {
    createNewCard: PropTypes.func.isRequired
  }
  
  export default NewCardForm;