import React from "react";
import { Item } from "./Item";
import styles from "./ItemList.module.css";

function ItemsList({ data, filter }) {
  const sortedList = data.sort((a, b) => {
    const nameA = (a.name || a.title).toLowerCase();
    const nameB = (b.name || b.title).toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });

  const filterList = () => {
    const filteredName = filter.toLowerCase();

    return sortedList.filter((item) => {
      return (item.name || item.title).toLowerCase().includes(filteredName);
    });
  };

  return (
    <ul>
      {filterList().map((item) => (
        <li key={item.name || item.title} className={styles.listItem}>
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
}

export { ItemsList };
