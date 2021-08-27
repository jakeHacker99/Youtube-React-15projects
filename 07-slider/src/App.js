import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const lastIndex = people.length -1;
    if(index <0 ){
      setIndex(lastIndex)
    }
    if(index > people.length -1 ){
      setIndex(0)
    }
    
  }, [index, people])


  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index+1 )
    }, 3000);
    return () =>clearInterval(slider)
  }, [index])

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
        <button className="btn btn-primary" onClick={() => console.log(data)}>
          tryck inte här
        </button>
        <div className="section-center">
          {people.map((person, personIndex) => {
            const { id, image, name, title, quote } = person;

            let postion = "nextSlide";
            if (personIndex === index) {
              postion = "activeSlide";
            }
            if (
              personIndex === index - 1 ||
              (index === 0 && personIndex === people.length - 1)
            ) {
              postion = "lastSlide";
            }

            return (
              <article key={id} className={postion}>
                <img src={image} alt={name} className="person-img"></img>
                <h4> {title} </h4>
                <p className="title">{title}</p>
                <p className="tex">{quote}</p>
                <FaQuoteRight className="icon" />
              </article>
            );
          })}
          <button className="prev" onClick={() => setIndex(index-1)} >
            <FiChevronLeft />
          </button>
          <button className="next" onClick={() => setIndex(index+ 1)} >
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
