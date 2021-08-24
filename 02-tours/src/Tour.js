import React, { useState } from "react";

const Tour = ({ id, image, info, price, name }) => {
  const [readMore, setReadMore] = useState(false)
  return (
    <article className="single-tour" key={id} >
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4> {name} </h4>
          <h4 className="tour-price"> {price}₿ </h4>
        </div>
        <p> {readMore?info: `${info.substring(0,200)}`} 
        <button onClick={() => setReadMore(!readMore)}>
          {readMore?"Show less" : "Read more"}
        </button>
        </p>
        <button className="delete-btn" onClick={() => {console.log(`${name} was clicked`)
      }}>Not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
