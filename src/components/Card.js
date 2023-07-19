import React from "react";
import PropTypes from 'prop-types'; 
import "./Card.css";

// The responsibility of this component is to be a reusable UI element that displays an Animal's
// - name
// - species
// - photo
const Card = (props) => {

    const toggleLikes = () => {
        // We want event handler function to do two things:
            // update component's internal state
            // update that information to SSOT
        props.updateLikes(props.id);
    }


    const toggleDelete = () => {
        console.log("toggle Delete is called!")
        props.updateDelete(props.id)
    }

    return (
        <section className="card-item">
            {/* if the card object exists AND it has a key called message then create this JSX */}
            {props.card && props.card.message &&
                <li><p className='card-message'>{props.card.message}</p></li>
            }
            <ul className="card-controls">
                {/* <li><p>{props.card.likesCount} ** </p></li> */}
                <li><p onClick={() => props.addOneLike(props.card)}> +1</p></li>
            </ul>
        </section>
    );
};


// msg, like count, +1 card item, delete
Card.propTypes = {
    message: PropTypes.string,
    likesCount: PropTypes.func,
    addOneLike: PropTypes.func,
}


export default Card;