import React, { useContext, useState } from "react";
import { TreeContext } from "../store/TreeContext";

export const TreeBox = ({ user = {} }) => {
  const { state, setState } = useContext(TreeContext);

  const Body = ({ user }) => {
    const [name, setName] = useState(user.name);
    const handleOnNameChange = e => {
      setName(e.target.value);
    };
    const handleOnKeyDown = e => {
      if (e.key === "Enter") {
        setState({
          ...state,
          [user.id]: { ...state[user.id], name: e.target.value }
        });
      }
    };

    return (
      <span>
        <img src={user.img} alt={user.name} />
        <input
          value={name}
          onChange={e => handleOnNameChange(e)}
          onKeyDown={e => handleOnKeyDown(e)}
        />
      </span>
    );
  };

  return (
    <>
      <Body user={user} />
      <ul>
        {user.children.map(userId => (
          <li>
            <TreeBox user={{ ...state[userId], id: { userId } }} />
          </li>
        ))}
      </ul>
    </>
  );
};
