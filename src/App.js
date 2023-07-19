import React from "react";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./components/Card";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import Board from "./components/Board";

function App() {
  const emptyBoardData = [
    {
      id: 0,
      title: "",
      owner: "",
    },
  ];

  const emptyCardData = [
    {
      id: 0,
      message: "",
      likes_count: 0,
    },
  ];

  const [boardsData, setBoardsData] = useState(emptyBoardData);
  const [selectedBoard, setSelectedBoard] = useState(emptyBoardData);
  const [selectedCards, setCardsData] = useState(emptyCardData);
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
  const updateLikes = (cardId) => {
    const updatedCards = selectedCards.map((card) => {
      if (card.card_id === cardId) {
        const updatedCard = {
          ...card,
          likes_count: card.likes_count + 1, // Increment the likes count by 1
        };

        axios
          .patch(
            `https://back-end-inspiration-board-coffee-lovers.onrender.com/cards/${cardId}`,
            {
              likes_count: updatedCard.likes_count,
            }
          )
          .then(() => {
            // Fetch the updated card data from the server
            axios
              .get(
                `https://back-end-inspiration-board-coffee-lovers.onrender.com/cards/${cardId}`
              )
              .then((response) => {
                const updatedCardData = response.data;
                // Update the selectedCards state with the updated card data
                setCardsData((prevCards) =>
                  prevCards.map((prevCard) =>
                    prevCard.card_id === cardId ? updatedCardData : prevCard
                  )
                );
              })
              .catch((error) => {
                console.log("Error fetching updated card data:", error);
              });
          })
          .catch((error) => {
            console.log("Error updating likes count:", error);
          });

        return updatedCard;
      }
      return card;
    });

    setCardsData(updatedCards);
  };

  const updateDelete = (cardId) => {
    // Send a DELETE request to the backend API to delete the card
    axios
      .delete(
        `https://back-end-inspiration-board-coffee-lovers.onrender.com/cards/${cardId}`
      )
      .then(() => {
        // If the deletion is successful, update the selectedCards state by filtering out the deleted card
        const updatedCards = selectedCards.filter(
          (card) => card.card_id !== cardId
        );
        setCardsData(updatedCards);
      })
      .catch((error) => {
        console.log("Error deleting card:", error);
      });
  };

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

  const createNewBoard = (newBoardFormData) => {
    // add board_id as a unique key for flask (when we connect to BE)
    // const updateNewBoardInfo = {
    //   ...newBoardFormData,
    //   board_id: null,
    // };

    axios
      .post(
        "https://back-end-inspiration-board-coffee-lovers.onrender.com/boards",
        newBoardFormData
        // updateNewBoardInfo
      )
      .then(() => {
        const newBoardsArray = [...boardsData];
        newBoardsArray.push(newBoardFormData);
        // setBoardsData([...boardsData, newBoardsArray ]);
        // setBoardsData(newBoardsArray);
        loadBoards();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createNewCard = (newCardFormData) => {
    if (!selectedBoard) {
      console.log("No board selected");
      return;
    }

    newCardFormData.board_id = selectedBoard.board_id;
    newCardFormData.likes_count = 0;

    axios
      .post(
        "https://back-end-inspiration-board-coffee-lovers.onrender.com/cards",
        newCardFormData
      )
      .then((response) => {
        const createdCard = response.data;

        // Update the selectedCards state with the newly created card
        setCardsData((prevCards) => [...prevCards, createdCard]);

        // Fetch the updated card data from the server
        axios
          .get(
            `https://back-end-inspiration-board-coffee-lovers.onrender.com/cards/${createdCard.card_id}`
          )
          .then((response) => {
            const updatedCard = response.data;

            // Update the selectedCards state with the updated card data
            setCardsData((prevCards) =>
              prevCards.map((card) =>
                card.card_id === updatedCard.card_id ? updatedCard : card
              )
            );
          })
          .catch((error) => {
            console.log("Error fetching updated card data:", error);
          });
      })
      .catch((error) => {
        console.log("Error creating card:", error);
      });
  };

  const selectBoard = (id) => {
    const board = boardsData.find((board) => board.board_id === id);
    console.log("this is the value of board", board);
    setSelectedBoard(board);

    axios
      .get(
        `https://back-end-inspiration-board-coffee-lovers.onrender.com/boards/${board.board_id}/cards`
      )
      // response (cards) is the data received from BE
      .then((response) => {
        console.log(
          "this is the cards data that comes back for the selected board",
          response.data
        );
        setCardsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Inspiration Board</h1>
      <div className="form-row">
        <section>
          <NewBoardForm createNewBoard={createNewBoard} />
          <NewCardForm createNewCard={createNewCard} />
        </section>
        <section>
          <h2>Selected Board</h2>
          <h3>{selectedBoard.title}</h3>
          <p>{selectedBoard.owner}</p>

          <h2>Boards</h2>
          <ol>
            {boardsData.map((board) => (
              <Board
                key={board.id}
                board={board}
                onBoardSelect={setSelectedBoard}
                propShouldHappenOnBoardSelect={selectBoard}
              />
            ))}
          </ol>
          <section className="cards__container">
            <div className="card-items__container">
              <h2>Cards for {selectedBoard.title}</h2>
              <ol>
                {selectedCards.map((card) => (
                  <Card
                    key={card.card_id}
                    card={card}
                    updateLikes={updateLikes}
                    updateDelete={updateDelete}
                    onBoardSelect={setSelectedBoard}
                    propShouldHappenOnBoardSelect={selectBoard}
                  />
                ))}
              </ol>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

export default App;
