import { useState } from "react";
import "./App.css";
import Cards from "./Components/Card";
import ImageModal from "./Components/imageModel";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items = [
    {
      img: "http://cdn.wallpapersafari.com/75/22/9lzQX3.jpg",
      id: 1,
    },
    {
      img: "https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/10/20131251/plumeria.jpeg",
      id: 2,
    },
    {
      img: "https://i.pinimg.com/originals/0c/fe/42/0cfe42b53ae0c76062c74676e8c799c8.jpg",
      id: 3,
    },
    {
      img: "https://images2.alphacoders.com/692/692432.jpg",
      id: 4,
    },
    {
      img: "https://webneel.com/wallpaper/sites/default/files/images/07-2013/beautiful-flower-wallpaper.jpg",
      id: 5,
    },
    {
      img: "https://www.thespruce.com/thmb/EZu35SvestXqdlCG92IYo7taJ0k=/4288x2848/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-154961667-b296e7d7a8424af9840c177eb20bd0d6.jpg",
      id: 6,
    },
    {
      img: "http://upload.wikimedia.org/wikipedia/commons/9/99/Spring_Flowers.JPG",
      id: 7,
    },
    {
      img: "http://www.pixelstalk.net/wp-content/uploads/2016/05/Beautiful-rose-flower-wallpaper-mobile.jpg",
      id: 8,
    },
  ];

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Header />
      <hr />
      <div className="container px-2 py-20 mx-auto ">
        <div className="flex flex-wrap -m-2">
          {items.map((data) => (
            <Cards
              key={data.id}
              img={data.img}
              onPress={() => handleImageClick(data.img)}
            />
          ))}
        </div>
      </div>
      {isModalOpen && (
        <ImageModal img={selectedImage} closeModal={closeModal} />
      )}
      <Footer />
    </>
  );
}

export default App;
