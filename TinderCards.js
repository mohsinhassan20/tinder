import { Directions, SwipeDown } from "@mui/icons-material";
import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setpeople] = useState([
    {
      name: "Mohsin",
      url: "https://m.media-amazon.com/images/I/91G00NOgKYL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      name: "Jeff Bezzos",
      url: "https://m.media-amazon.com/images/I/81PyY78yuNL._AC_UL480_FMwebp_QL65_.jpg",
    },
  ]);

  const swipeDown = (Direction, nameToDelete) => {
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
              className="card"
              style={{ backgoundImage: `url(${person.url})` }}
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
