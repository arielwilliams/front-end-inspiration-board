import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Card from './components/Card';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';
import Board from './components/Board';

// NEXT STEPS**************************
// create mock data here for boards (it will look like list of animals data)

const INITIAL_BOARD_DATA = [
  {
    id: 100,
    title: "Hello World Board",
    owner: "Ariel"
  },
  {
    id: 101,
    title: "Henlo Board",
    owner: "Edith"
  },
  {
    id: 102,
    title: "Where's Keiko Board",
    owner: "Mel"
  },
];








function App() {
  const [boardsData, setBoardsData] = useState([]);
  // NEXT STEPS ****************************
  // update our boardsData based on what we receive from BE request from boards
  // just use pseudocode data for now until we connect to BE

  const [selectedBoard, setselectedBoard]  = useState({
    title: '',
    owner: '',
    board_id: '',
  }

)

//  WE ONLY NEED USEEFFECT FOR BOARDS -> TO DISPLAY ALL BOARDS ON DOM, THAT IS WHAT USEEFFECT IS FOR
// USE EFFECT IS USED FOR MAKING API CALLS EXTERNALLY, IT GETS YOU THE INFO 
// grab the boards -> you want to set local state that is effected by that state to reflect the new info

// NEED TO UPDATE THIS WHEN WE CONNECT TO BE
// useEffect( () => {
//   axios.get('https://back-end-inspiration-board-coffee-lovers.onrender.com/boards/${board_id}/cards')
//     .then( (response) => {
//       const initialBoardFormData = [];
//       response.data.forEach(board => {
//         initialBoardData.push(board);
//       });
//       setBoards(initialBoardData);
//     })
//     .catch( (error) => {
//       console.log('error', error);
//     });
// }, []);





const createNewBoard = (newBoardInfo) => {
  // add board_id as a unique key for flask (when we connect to BE) 
  const updateNewBoardInfo = {
    ...newBoardInfo,
    "board_id": null
  }};

  const createNewCard = (newCardInfo) => {
    // add card_id as a unique key for flask (when we connect to BE) 
    const updateNewCardInfo = {
      ...newCardInfo,
      "card_id": null
    }};

return (
  <div>
    <h1>Inspiration Board</h1>
    <div className='form-row'>
      {/* <Card
        listOfCards={cards} 
        updateLikes={updateLikes} 
        updateDelete={updateDelete}>
      </Card>  */}
      <section>
        <NewBoardForm createNewBoard={createNewBoard}/>
        <NewCardForm createNewCard={createNewCard}/>
      </section>
      <section>
        <h2>Selected Board</h2>
      </section>
      <section>
        <h2>Boards</h2>
        <ol className="boards__list"> "text texty text"
          {/* {boardsElements} */}
        </ol>
      </section>
    </div>
  </div>

);
};

export default App;

