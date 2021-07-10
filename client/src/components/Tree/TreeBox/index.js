import React from "react";
import { BodyContent } from "./BodyContent";
import styles from "../styles.module.scss";

export const TreeBox = ({ user = {}, tree, setTree }) => {
  return (
    <>
      <BodyContent user={user} tree={tree} setTree={setTree} />
      <ul className={`${styles["tree-ul"]} ${styles["tree-ul-ul"]}`}>
        {user.children &&
          user.children.map((userId, index) => (
            <li className={styles["tree-li"]} key={index}>
              <TreeBox
                user={{ ...tree[userId], id: userId }}
                tree={tree}
                setTree={setTree}
              />
            </li>
          ))}
      </ul>
    </>
  );
};
