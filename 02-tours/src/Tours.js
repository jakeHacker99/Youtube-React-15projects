import React from "react";
import Tour from "./Tour";
const Tours = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2>
          our tours
        </h2>
          <div className="unerline"></div>
      </div>
      <div>
        {tours.map((tour) => {
        return (<Tour key={tour.id}{...tour} ></Tour>           )
        })}
      </div>
    </section>
    // <>
    //   <h2>availbale tours</h2>
    //   {tours.map((tours) => {
    //     const { id, name, info, price, image } = tours;
    //     return (
    //       <article key={id}>
    //         <img src={image} alt={name} />
    //         <h3>{price}  $</h3>
    //         <p> {info}  </p>
    //       </article>
    //     );
    //   })}
    // </>



  );
};

export default Tours;
