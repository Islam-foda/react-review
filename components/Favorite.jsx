import React from "react";
import { PropTypes } from "prop-types";
import data from "../src/data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

Favorite.propTypes = {
  data: PropTypes.array,
};

export default function Favorite() {
  const [count, setCount] = React.useState(0);
  const { id, name, job, image, text } = data[count];

  const checkNumber = (number) => {
    if (number > data.length - 1) {
      return 0;
    }
    if (number < 0) {
      return data.length - 1;
    }
    return number;
  };

  //create random function to randomize the index.
  function toggleRndom() {
    setCount((preValue) => {
      let randomNumber = Math.floor(Math.random() * data.length);
      if (randomNumber === preValue) {
        randomNumber = preValue + 1;
      }
      return checkNumber(randomNumber);
    });
  }

  //toggle function
  function toggleRight() {
    setCount(checkNumber(count + 1));
  }
  function toggleLeft() {
    setCount(checkNumber(count - 1));
  }
  return (
    <article key={id} className="review">
      <div className="img-contain">
        <img src={image} alt={name}></img>
        <span className="img-quote">
          <FaQuoteRight />
        </span>
      </div>
      <div className="author">
        <h3>{name}</h3>
        <h5>{job}</h5>
      </div>
      <p>{text}</p>
      <div className="toggles">
        <button onClick={toggleLeft}>
          {" "}
          <FaChevronLeft />
        </button>
        <button onClick={toggleRight}>
          {" "}
          <FaChevronRight />
        </button>
      </div>
      <button onClick={toggleRndom} className="surprise">
        Surprise me
      </button>
    </article>
  );
}
