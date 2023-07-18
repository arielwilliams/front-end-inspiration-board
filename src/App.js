import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import Board from "./components/Board";


// NEXT STEPS**************************
// create mock data here for boards (it will look like list of animals data)

// const INITIAL_BOARD_DATA = [
//   {
//     id: 100,
//     title: "Hello World Board",
//     owner: "Ariel"
//   },
//   {
//     id: 101,
//     title: "Henlo Board",
//     owner: "Edith"
//   },
//   {
//     id: 102,
//     title: "Where's Keiko Board",
//     owner: "Mel"
//   },
// ];


function App() {
  const emptyBoardData = [{
    id: 0,
    title: '',
    owner: ''
  }]

  const [boardsData, setBoardsData] = useState(emptyBoardData);
  const [selectedBoard, setSelectedBoard] = useState(emptyBoardData);
  // const [likedMessages, setLikedMessages] = useState(0);
  // NEXT STEPS ****************************
  // update our boardsData based on what we receive from BE request from boards
  // just use pseudocode data for now until we connect to BE
  
  // const handleLikeChange = (isLiked) => {
  //   if (isLiked) {
  //     setLikedMessages((prevCount) => prevCount + 1);
  //   }
  // };

  // ********** ISSUE: THE LOAD BOARDS IS WORKING AND WE CAN PRINT OUT THE BOARDS
  // BUT IT DOES NOT *UPDATE* IN THE USE STATE 
  // LOOKS LIKE THE ISSUE IS IN THE USESTATE BECAUSE IT DOESN'T UPDATE 
  // *********** THIS IS WHERE WE NEED TO PICK UP FROM *****************
  const loadBoards = () => {
    console.log("inside LoadBoards")
    axios
      .get(
        "https://back-end-inspiration-board-coffee-lovers.onrender.com/boards"
      )
      .then((response) => {
        // create new array called initialBoardFormData
        const initialBoardFormData = [];
        
        // iterate over response data received from BE axios get
        // push each object (board) into the array initialBoardFormData
        response.data.forEach((board) => {
          initialBoardFormData.push(board);
        });

        // calls func setBoardData on the initialBoardFormData array to update it
        setBoardsData(initialBoardFormData);
      })
      .catch((error) => {
        console.log("error", error);
      });
      
  };

 // NEED THIS CONSOLE LOG IN ORDER OT PRINT OUT OUR 2 BOARDS WE CREATED
  console.log(boardsData);


  // NEED THIS LOAD BOARDS HERE TO CONSOLE LOG ABOVE
    useEffect(() => {
      loadBoards();
    }, []);
  
  // useEffect(() => {
  //   console.log(boardsData);
  // }, [boardsData]);

  // COMMENT BACK IN LATER WHEN WE WANT LIKES FUNCTIONALITY
  // const updateLikes = (cardId) => {
  //   const updatedBoards = cards.map((card) => {
  //     if (card.id === cardId) {
  //       return {
  //         ...card,
  //         isLiked: !card.isLiked,
  //       };
  //     }
  //   });
  // };

  // const [selectedBoard, setselectedBoard]  = useState({
  //   title: '',
  //   owner: '',
  //   board_id: '',
  // }

  // );

  //  WE ONLY NEED USEEFFECT FOR BOARDS -> TO DISPLAY ALL BOARDS ON DOM, THAT IS WHAT USEEFFECT IS FOR
  // USE EFFECT IS USED FOR MAKING API CALLS EXTERNALLY, IT GETS YOU THE INFO
  // grab the boards -> you want to set local state that is effected by that state to reflect the new info

  // // NEED TO UPDATE THIS WHEN WE CONNECT TO BE
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://back-end-inspiration-board-coffee-lovers.onrender.com/boards/${board_id}/cards"
  //     )
  //     .then((response) => {
  //       const initialBoardFormData = [];
  //       response.data.forEach((board) => {
  //         initialBoardFormData.push(board);
  //       });
  //       setBoardsData(initialBoardFormData);
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //     });
  // }, []);

  // const createNewBoard = (newBoardInfo) => {
  //   // add board_id as a unique key for flask (when we connect to BE)
  //   const updateNewBoardInfo = {
  //     ...newBoardInfo,
  //     board_id: null,
  //   };
  
  //   axios
  //     .post(
  //       "https://back-end-inspiration-board-coffee-lovers.onrender.com/boards"
  //       // updateNewBoardInfo
  //     )
  //     .then(() => {
  //       const newBoardsArray = [...Board];
  //       newBoardsArray.push(NewBoardForm);
  //       setBoardsData(newBoardsArray);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  


// const createNewCard = (newCardInfo) => {
//   // add card_id as a unique key for flask (when we connect to BE)
//   const updateNewCardInfo = {
//     ...newCardInfo,
//     card_id: null,
//   };
// };

const selectBoard = (id) => {
  axios
  .get(`https://back-end-inspiration-board-coffee-lovers.onrender.com/boards`)
  .then((result)=>{
    console.log(result.data)
    setSelectedBoard(result.data);

  })
  .catch((error)=>{
    console.log(error)
  });
};

  return (
    <div>
      <h1>Inspiration Board</h1>
      <div className="form-row">
        {/* <Card listOfCards={Card} updateLikes={updateLikes}></Card> */}
        <Card listOfCards={Card}></Card>
        <section>
          {/* <NewBoardForm createNewBoard={createNewBoard} /> */}
          {/* <NewCardForm createNewCard={createNewCard} /> */}
        </section>
        <section>
          <h2>Selected Board</h2>
          <h3>{selectedBoard.title}</h3>
          <p>{selectedBoard.owner}</p>
        </section>
        <section>
          <h2>Boards</h2>
          <ol>
          {boardsData.map((board) => (
            <Board key={board.id} board={board} onBoardSelect={setSelectedBoard} />
          ))}
          </ol>
        </section>
      </div>
    </div>
  );
};

export default App;