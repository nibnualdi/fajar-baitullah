import React from "react";
import Button from "../Form/Button";

type ModalProps = {
  message?: string | JSX.Element;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Modal = ({ message, setIsOpen, onClick, ...props }: ModalProps) => {
  const handleCancel = () => {
    setIsOpen && setIsOpen(false);
  };
  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick && onClick(e);
    setIsOpen && setIsOpen(false);
  };

  return (
    <div
      id="popup-modal"
      tabIndex={-1}
      className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full flex justify-center items-center"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            data-modal-hide="popup-modal"
            onClick={handleCancel}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-gray-500">
              {message ? message : "Are you sure you want to delete this product?"}
            </h3>

            <span className="flex flex-col gap-1">
              <Button name="Yes, I'm sure" onClick={handleSubmit} colorSceme="red" />
              <Button
                name="No, cancel"
                variant="outline"
                onClick={handleCancel}
                colorSceme="gray"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
