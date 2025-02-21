import React, { useRef } from 'react';

function Modal({ headerLabel, isOpen, onCloseRequested, children }) {
  const modalRef = useRef(null);

  // If the modal is not open, return null to prevent rendering
  if (!isOpen) return null;

  // Handle clicks outside the modal content to close the modal
  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onCloseRequested(); // Close modal when clicking outside
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(38, 39, 71, 0.61)' }} // Apply gray with 50% opacity
      onClick={handleOverlayClick} // Close modal when clicking on overlay
    >
      <div
        ref={modalRef}
        className="bg-white rounded-md p-4 w-96"
      >
        <div className="flex justify-between items-center mb-4">
          <h3>{headerLabel}</h3>
          <button
            aria-label="Close"
            onClick={onCloseRequested}
            className="text-xl font-bold"
          >
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
