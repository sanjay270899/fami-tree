import { Dropdown } from "@innovaccer/design-system";
import { useState } from "react";
import styles from "../../styles.module.scss";

export const BodyContent = ({ user, tree, setTree }) => {
  const [name, setName] = useState(user.name);

  const handleOnNameChange = e => {
    setName(e.target.value);
  };

  const handleOnKeyDown = e => {
    if (e.key === "Enter") {
      setTree({
        ...tree,
        [user.id]: { ...tree[user.id], name: e.target.value }
      });
    }
  };

  return (
    <span className={styles["tree-li-span"]}>
      <div className={styles["buttons"]}>
        <Dropdown icon="add" menu={true} className={styles["Dropdown"]} />
        <Dropdown
          icon="more_horiz"
          menu={true}
          className={styles["Dropdown"]}
        />
      </div>
      <img src={user.img} alt={user.name} />
      <input
        value={name}
        onChange={e => handleOnNameChange(e)}
        onKeyDown={e => handleOnKeyDown(e)}
      />
    </span>
  );
};
