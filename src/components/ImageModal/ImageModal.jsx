import { useEffect } from "react";
import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

export default function ImageModal({ isOpen, onRequestClose, src, alt }) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === "Escape") {
        onRequestClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onRequestClose]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={styles.Modal}
      overlayClassName={styles.Overlay}
    >
      <img src={src} alt={alt} />
    </ReactModal>
  );
}
