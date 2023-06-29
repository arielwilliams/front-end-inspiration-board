import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Card from './components/Card';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';

// Edith and Ariel left off here. Created two useState ... 
function App() {
  const [boardsData, setBoardsData] = useState([]);
  const [selectedBoard, setselectedBoard]  = useState({
    title: '',
    owner: '',
    board_id: '',
  }

)


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
  </section>
);
};

export default App;

