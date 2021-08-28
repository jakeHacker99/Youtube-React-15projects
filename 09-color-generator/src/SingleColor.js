import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
  console.log("hex", hexColor)
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  const hexValue= `#${hexColor}`
  console.log(bcg);

  useEffect(() => {
    const timeout =setTimeout(() => {
      setAlert(false)
    }, 2000);

    return () => clearTimeout(timeout)
  }, [alert])
  return (
    <article onClick={() => {
      setAlert(true)
      navigator.clipboard.writeText(hexValue)

    }} className={`color ${index > 10} && "color-light" `} style={{ backgroundColor: `rgb(${bcg})` }}>
      <p className="percent-value">{weight} %</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p  className="alert"> copied to clipboard 🛸</p>}
    </article>
  );
};

export default SingleColor;
