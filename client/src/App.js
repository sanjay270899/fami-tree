import { useState } from "react";
import { TreeBox } from "./components/TreeBox";
import { TreeContext } from "./store/TreeContext";

function App() {
  const [state, setState] = useState({
    0: {
      img: "https://picsum.photos/200/300",
      name: "Human-000",
      children: ["1", "2", "3"]
    },
    1: {
      img: "https://picsum.photos/200/300",
      name: "Human-001",
      children: []
    },
    2: {
      img: "https://picsum.photos/200/300",
      name: "Human-002",
      children: ["4", "5"]
    },
    3: {
      img: "https://picsum.photos/200/300",
      name: "Human-003",
      children: []
    },
    4: {
      img: "https://picsum.photos/200/300",
      name: "Human-003",
      children: ["6"]
    },
    5: {
      img: "https://picsum.photos/200/300",
      name: "Human-003",
      children: []
    },
    6: {
      img: "https://picsum.photos/200/300",
      name: "Human-003",
      children: []
    }
  });
  return (
    <TreeContext.Provider value={{ state, setState }}>
      <div className="tree">
        <ul>
          <li>
            <TreeBox user={{ ...state["0"], id: "0" }} />
          </li>
        </ul>
      </div>
    </TreeContext.Provider>
  );
}

export default App;
