import { StrictMode } from "react";
import ReactDOM from "react-dom";
// import pi, {doublePi,triplePi} from "./math.js";
import * as pi from "./math.js";
import { add, substract, multiply, divide } from "./task.js";
// import * as add from "./task"

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
    <h4>Task output</h4>
    <ul>
      {/* <li>{add.add(1,2)}</li>
      <li>{add.substract(9,3)}</li> */}
      <li>{add(1, 2)}</li>
      <li>{substract(9, 3)}</li>
      <li>{multiply(5, 1)}</li>
      <li>{divide(5, 2)}</li>
    </ul>
  </StrictMode>,
  rootElement
);
