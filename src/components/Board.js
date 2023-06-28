import './Board.css';

// The responsibility of this component is to be a reusable UI element that displays an Animal's
// - name
// - species
// - photo
const Board = () => {

    return (<section className="Board">
        <h3>Board name: Samson</h3>
        <p>Species: Cat</p>
        <img src="http://placekitten.com/g/200/200" alt="Photo of Willow"></img>
    </section>);
};

export default Board;