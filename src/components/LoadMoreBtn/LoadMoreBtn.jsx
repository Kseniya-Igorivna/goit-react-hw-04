import styles from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <button className={styles.LoadMoreBtn} onClick={onClick}>
      Load more
    </button>
  );
}
