function ImageModal({ img, closeModal }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center w-full h-full"
      onClick={closeModal}
    >
      <div className="relative">
        <img
          src={img}
          alt="Full screen"
          className="max-w-screen-lg max-h-screen-lg"
        />
        <button
          className="absolute top-2 right-2 text-white text-2xl"
          onClick={closeModal}
        >
          &times;
        </button>
      </div>
    </div>
  );
}

export default ImageModal;
