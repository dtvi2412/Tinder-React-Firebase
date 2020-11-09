import React, { useEffect, useState } from 'react';

import TinderCard from 'react-tinder-card';
import database from '../../configFirebase';
import './TinderCards.css';
function TinderCards() {
  const [people, setPeople] = useState([]);
  //Piece of code which runs based on condition
  useEffect(() => {
    //this is where the code runs ...
    const unsubscribe = database.collection('people').onSnapshot((snapshot) => {
      setPeople(snapshot.docs.map((doc) => doc.data()));
    });

    return () => unsubscribe();
  }, []);
  return (
    <div>
      {/* <h1>TinderCard</h1> */}
      <div className="tinderCards__cardContainer">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={['up', 'down']}
            >
              <div
                style={{ backgroundImage: `url("${person.url}")` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default TinderCards;
