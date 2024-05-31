
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { shuffleArray } from './assets/shuffle';
import './App.css'; // Import your CSS file for styling

function App() {
  const [data, setData] = useState(null);
  const [currScore, setCurrScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function resetCards() {
    const nextData = data.map((curr) => {
      return { ...curr, played: false };
    })
    setData(shuffleArray(nextData));
    alert("Boohoo! Game over!!")
    setCurrScore(0);
  }

  async function fetchData() {
    try {
      const response = await fetch('https://api.stockx.vlour.me/search?query=barbie')

      if (!response.ok) {
        throw new Error('Network response not ok');
      }

      const result = await response.json();
      let cardData = [];

      for (let i = 0; i < 12; i++) {
        const item = result.hits[i];
        const id = item.id.substring(0, 6);
        const imgSrc = item.image;
        cardData.push({ id, imgSrc, played: false });
      }
      setData(shuffleArray(cardData).slice(0, 12)); // Slice to only get the first 8 items

    } catch (error) {
      console.error('Error:', error);
    }
  }

  function handleClick(id) {
    const item = data.find((item) => item.id === id);

    if (item.played === true) {
      resetCards();
      return;
    }

    const nextData = data.map((curr) => {
      if (curr.id === id) {
        return { ...curr, played: true };
      } else {
        return curr;
      }
    });
    setData(shuffleArray(nextData));
    setCurrScore(currScore + 1);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (currScore > highScore) {
      setHighScore(currScore);
    }
  }, [currScore, highScore]);

  return (
    <div>
      <header>
        <div className="headers">
          <div className='heade'>
            <h1>Barbie Memory Game</h1>
            <h3>Click the barbies to get started!... don&apos;t click the same barbie twice!</h3>
          </div>
          <div className="header">
            <p>Current Score: {currScore}</p>
            <p>High Score: {highScore}</p>
          </div>

        </div>
      </header>
      {data ? (
        <main className="grid-container"> 
          {data.map(item => (
            <button
              key={item.id}
              onClick={() => { handleClick(item.id) }}
              className="grid-item"
            >
              <img src={item.imgSrc} alt="" />
            </button>
          ))}
        </main>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
