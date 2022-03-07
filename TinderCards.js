import { Directions, SwipeDown } from "@mui/icons-material";
import React, { useState } from "react";
import "./TinderCards.css";

function TinderCards() {
  const [people, setpeople] = useState([
    {
      name: "Mohsin",
      URL: "https://tse1.mm.bing.net/th?id=OIP.23gnJYIxRYyTnacDs2mUXQHaHa&pid=Api&P=0&w=179&h=179",
    },
    {
      name: "Hassan",
      URL: "https://tse4.mm.bing.net/th?id=OIP.d-ZzZ7JwBoTqyjWGMAG9mAHaFj&pid=Api&P=0&w=236&h=177",
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
          <TinderCards
            className="swipe"
            key={person.name}
            preventswipe={["up", "down"]}
            onswipe={(dir) => SwipeDown(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          ></TinderCards>
        ))}

        <div
          style={{ backgoundImage: `url(${person.url})` }}
          className="card"
        ></div>
      </div>
    </div>
  );
}

export default TinderCards;
