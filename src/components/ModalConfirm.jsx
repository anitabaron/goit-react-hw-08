import Modal from "react-modal";

export default function ModalConfirm({ isOpen, onRequestClose, onConfirm }) {
  return (
    <>
      <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <h2>Confirm</h2>
        <button onClick={onConfirm}>Yes, delete</button>
        <button onClick={onRequestClose}>Cancel</button>
      </Modal>
    </>
  );
}
