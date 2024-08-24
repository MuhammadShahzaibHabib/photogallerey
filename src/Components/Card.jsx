function Cards({ img = "https://dummyimage.com/420x260", onPress }) {
  return (
    <div
      onClick={onPress}
      className="cursor-pointer lg:w-1/4 md:w-1/2 p-2  w-full border shadow-md"
    >
      <a className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src={img}
        />
      </a>
    </div>
  );
}

export default Cards;
