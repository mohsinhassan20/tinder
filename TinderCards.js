import { Directions, SwipeDown } from "@mui/icons-material";
import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setpeople] = useState([
    {
      name: "Mohsin",
      url: "https://tse1.mm.bing.net/th?id=OIP.23gnJYIxRYyTnacDs2mUXQHaHa&pid=Api&P=0&w=179&h=179",
    },
  ]);

  const swiped = (Direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + "left of the Screen");
  };
  return (
    <div className="tinderCards">
      <div className="tindercards__Cardcontainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventswipe={["up", "down"]}
            onswipe={(dir) => SwipeDown(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgoundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
