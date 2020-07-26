import React from "react";
import styles from "./SearchInput.module.css";

function SearchInput({ value, onChange }) {
  return (
    <div className={styles.container}>
      <div className="input-group mb-3">
        <input
          onChange={onChange}
          type="text"
          className="form-control"
          value={value}
          placeholder="Filter by name"
        />
      </div>
    </div>
  );
}

export { SearchInput };
