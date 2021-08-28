import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
const [list, setList] = useState(new Values("#800080").all(10))
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);

      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error.message);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
          ></input>
          <label htmlFor=""></label>
          <button
            type="submit"
            className="btn"
            onClick={() => console.log("some one made a mistake!")}
          >
            Clicke me{" "}
          </button>
        </form>
      </section>

      <section className="color">
        <h4>


{list.map((color, index) => {
  return (
    <SingleColor key={index} {...color} index={index} hexColor={color.hex}   ></SingleColor>
  )
})}

        </h4>
        
      </section>
    </>
  );
}

export default App;
