function Header() {
  return (
    <header className="text-gray-700 bg-gray-100 body-font sticky top-0 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src="https://images-platform.99static.com/xcMl00nELVPmTs9julVCvqadCqI=/163x24:789x650/fit-in/590x590/99designs-contests-attachments/89/89779/attachment_89779256"
            alt=""
            className="w-20 h-20 text-white p-2  rounded-full"
          />
          <span className="ml-3 text-xl text-gray font-bold font-mono">
            Flowers Gallery
          </span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900 cursor-pointer hover:underline">
            Home
          </a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer hover:underline">
            About Us
          </a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer hover:underline">
            Blog
          </a>
          <a className="mr-5 hover:text-gray-900 cursor-pointer hover:underline">
            Contact
          </a>
        </nav>
        <button className="inline-flex items-center bg-indigo-500  text-white border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 rounded text-base mt-4 md:mt-0">
          singup
        </button>
      </div>
    </header>
  );
}

export default Header;
