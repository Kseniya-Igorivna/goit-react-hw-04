import styles from "./ImageCard.module.css";

export default function ImageCard({ src, alt, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
}
