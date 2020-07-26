import React from "react";

function ItemMoreInfo({ item }) {
  return (
    <ul>
      {Object.entries(item).map((item) => (
        <li key={item[0]}>
          {item[0]}: {item[1]}
        </li>
      ))}
    </ul>
  );
}

export { ItemMoreInfo };
