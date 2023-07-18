// const Board = (props) => {
//     return (<div onClick={() => props.onBoardSelect(props.board)}>{props.board.title}</div>);
// };

// export default Board;

// This is the new implementation that works when you select a board. 
const Board = ({ board, onBoardSelect }) => {
    const handleClick = () => {
    onBoardSelect(board);
};

return (
    <li onClick={handleClick}>{board.title}</li>
);
};

export default Board;

