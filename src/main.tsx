import React, { useState } from "react";
import { First } from "./first";

export function Main() {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <p>{clicked.toString()}</p>
      {!clicked ? (
        <button onClick={_ => setClicked(true)}>First query</button>
      ) : (
        <div>
          <First />
        </div>
      )}
    </div>
  );
}
