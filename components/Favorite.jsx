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

  //toggle function
  function toggleRight(ev) {
    if (count < data.length - 1) setCount(count + 1);
    ev.target.className = "dimit";
  }

  function toggleLeft(ev) {
    if (count > 0) setCount(count - 1);
    ev.target.className = "dimit";
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
      <button className="surbrise">Surprise me</button>
    </article>
  );
}
