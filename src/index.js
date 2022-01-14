import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import pi, {doublePi,triplePi} from "./math.js";
import * as pi from "./math.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <h4>ES6 Lesson</h4>
    <ul>
      <li>{pi.default}</li>
      {/* <li>{pi}</li> */}
      {/* <li>{doublePi(2)}</li> */}
      <li>{pi.doublePi(2)}</li>
      <li>{pi.triplePi()}</li>
    </ul>
  </StrictMode>,
  rootElement
);
