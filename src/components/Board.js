// const Board = (props) => {
//     return (<div onClick={() => props.onBoardSelect(props.board)}>{props.board.title}</div>);
// };

// export default Board;

// This is the new implementation that works when you select a board. 
const Board = ({ board, onBoardSelect, simonsPropShouldHappenOnBoardSelect }) => {
    const handleClick = () => {
    // onBoardSelect(board);
    simonsPropShouldHappenOnBoardSelect(board.board_id);
};

return (
    <li onClick={handleClick}>{board.title}</li>
);
};

export default Board;

