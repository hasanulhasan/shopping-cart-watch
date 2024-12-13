/* eslint-disable react/prop-types */

export default function Modal({ isOpen, onClose, children }){
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg w-[651px] h-[480px] max-w-full shadow-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};