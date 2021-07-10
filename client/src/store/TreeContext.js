import { createContext, useState } from "react";

const TreeData = {
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
};

const loadInitialData = () => {
  const tree = localStorage.getItem("tree");
  if (tree) {
    return tree;
  }
  return TreeData;
};

export const TreeContext = createContext({});

export const TreeContextProvider = ({ children }) => {
  const [tree, setTree] = useState(loadInitialData());
  return (
    <TreeContext.Provider value={{ tree, setTree }}>
      {children}
    </TreeContext.Provider>
  );
};
