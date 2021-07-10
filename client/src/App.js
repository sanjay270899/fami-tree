import { useContext } from "react";
import { Tree } from "./components/Tree";
import { TreeContext } from "./store/TreeContext";

function App() {
  const { tree, setTree } = useContext(TreeContext);
  return (
    <>
      <Tree tree={tree} setTree={setTree} />
    </>
  );
}

export default App;
