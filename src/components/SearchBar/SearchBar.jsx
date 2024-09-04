import { useState } from "react";
import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (input.trim() === "") {
      return;
    }
    onSubmit(input);
  };

  return (
    <header className={styles.searchBar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.input}
          value={input}
          onChange={handleChange}
          placeholder="Search images and photos"
          autoComplete="off"
          autoFocus
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </header>
  );
}
