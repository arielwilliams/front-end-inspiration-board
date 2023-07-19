import React, { useState } from "react";
import PropTypes from "prop-types";
import "./NewCardForm.css";

const initialCardFormData = {
  message: "",
  likes_count: 0,
};

function NewCardForm(props) {
  const [cardFormData, setCardFormData] = useState(initialCardFormData);

  // const anInputChanged = (evt, key) => {

  //   console.log(evt)

  //   const newCardFormData = {
  //     ...cardFormData,
  //     [key]: evt.target.value
  //   };

  //   setCardFormData(newCardFormData);
  // }

  const newCardFormData = (event) => {
    // event.preventDefault();
    // props.createNewBoardForm(cardFormData);
    setCardFormData({
      ...cardFormData,
      [event.target.name]: event.target.value,
    });
    console.log("Successfully pressed add new card", cardFormData);
  };

  const handleCardFormSubmit = (event) => {
    event.preventDefault();
    // new attempt
    props.createNewCard(cardFormData);
    console.log("handle form", cardFormData);
    setCardFormData({
      message: "",
      likes_count: 0,
    });
  };

  return (
    <section className="Card">
      <div className="card-div">
        <h2>Create New Card</h2>
        <form className="stack" onSubmit={handleCardFormSubmit}>
          <label htmlFor="message">Message:</label>
          <input
            id="cardMessage"
            // if we get a bug, try changing above to "message"
            name="message"
            type="text"
            value={cardFormData.message}
            required
            className="invalid-form-input"
            onChange={newCardFormData}
          />{" "}
          <section>
            <label htmlFor="cardPreview">Preview:</label>
            <p>{cardFormData.message}</p>

            <input
              type="submit"
              value="Add new Card"
              className="btn"
              //  disabled={message.length === 0 || message.length > 40}
            ></input>
          </section>
        </form>
      </div>
    </section>
  );
}

NewCardForm.propTypes = {
  createNewCard: PropTypes.func.isRequired,
};

export default NewCardForm;
