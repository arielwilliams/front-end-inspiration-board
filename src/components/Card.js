import React from "react";
import PropTypes from 'prop-types'; 

// The responsibility of this component is to be a reusable UI element that displays an Animal's
// - name
// - species
// - photo
const Card = (props) => {

    return (<section className="card-item">
        <li><p className='card-message'>{props.card.message}</p></li>
        <ul className="card-controls">
            <li><p>{props.card.likesCount} ** </p></li>
            <li><p onClick={() => props.addOneCard(props.card)}> +1</p></li>
            <li><p className="card-delete" onClick={() => props.deleteOneCard(props.card)}> Delete</p></li>
        </ul>
    </section>);
};


// msg, like count, +1 card item, delete
Card.propTypes = {
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.func,
  addOneCard: PropTypes.func,
  deleteOneCard: PropTypes.func
}


export default Card;