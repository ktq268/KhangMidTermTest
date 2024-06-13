import React from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, movie }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{movie.movieName}</h2>
        <img src={`src/assets/Image/${movie.image}`} alt={movie.movieName} />
        <p>{movie.description}</p>
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
