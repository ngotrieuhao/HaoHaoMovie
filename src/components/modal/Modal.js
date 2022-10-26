import React from "react";
import ReactDOM from "react-dom";
import { withErrorBoundary } from "react-error-boundary";
import { ErrorComponent } from "hooks/ErrorComponent";

const Modal = ({ open = false, handleClose = () => {} }) => {
  if (typeof document === "undefined") return <div className="modal"></div>;
  return ReactDOM.createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-5 modal ${
        open ? "" : "opacity-0 invisible"
      }`}
    >
      <div
        className="absolute inset-0 bg-black bg-opacity-25 ovlerlay-modal"
        onClick={handleClose}
      ></div>
      <div className="relative z-10 p-10 bg-white rounded-lg modal-content w-full max-w-[600px]">
        <span
          className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full cursor-pointer -translate-y-2/4 translate-x-2/4"
          onClick={handleClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#000000"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </span>
      </div>
    </div>,
    document.querySelector("#root")
  );
};

export default withErrorBoundary(Modal, {
  FallbackComponent: ErrorComponent,
});
