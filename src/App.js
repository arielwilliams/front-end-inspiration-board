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


// NEED TO UPDATE THIS WHEN WE CONNECT TO BE
// useEffect( () => {
//   axios.get('http://127.0.0.1:5000/')
//     .then( (response) => {
//       const initialBoardFormData = [];
//       response.data.forEach(animal => {
//         initialAnimalData.push(animal);
//       });
//       setAnimals(initialAnimalData);
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
  <section>
    <h1>Inspiration Board</h1>
      <NewBoardForm createNewBoard={createNewBoard}/>
    {/* <Card
      listOfCards={cards} 
      updateLikes={updateLikes} 
      updateDelete={updateDelete}>
    </Card>  */}
      <NewCardForm createNewCard={createNewCard}/>
      <h2>Boards</h2>
      <ol className="boards__list">
              {/* {boardsElements} */}
            </ol>
      <br></br>
      <h2>Selected Board</h2>
    </section>

);
};

export default App;

