import ReactModal from "react-modal";
import styles from "./ImageModal.module.css";

ReactModal.setAppElement("#root");

export default function ImageModal({ isOpen, onRequestClose, src, alt }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <img src={src} alt={alt} className={styles.image} />
    </Modal>
  );
}
