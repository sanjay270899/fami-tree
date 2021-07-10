import React from "react";
import { TreeBox } from "./TreeBox";
import styles from "./styles.module.scss";

export const Tree = ({ tree, setTree }) => {
  return (
    <div className={styles["tree"]}>
      <ul className={styles["tree-ul"]}>
        <li className={styles["tree-li"]}>
          <TreeBox
            user={{ ...tree["0"], id: "0" }}
            tree={tree}
            setTree={setTree}
          />
        </li>
      </ul>
    </div>
  );
};
