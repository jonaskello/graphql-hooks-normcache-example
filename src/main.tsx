import React, { useState } from "react";
import { First } from "./first";

export function Main() {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      {!clicked ? (
        <div>
          <p>
            The first query will be fetched from the server, check network tab
            in devtools.
          </p>
          <button onClick={_ => setClicked(true)}>First query</button>
        </div>
      ) : (
        <div>
          <First />
        </div>
      )}
    </div>
  );
}
