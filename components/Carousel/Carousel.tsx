import React, { useState } from "react";
import Image from "next/image";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

function Carousel(images: any) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const goToPreviousImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.images.length - 1 : currentImageIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex(
      currentImageIndex === images.images.length - 1 ? 0 : currentImageIndex + 1
    );
  };
  return (
    <div className="relative px-10 ">
      <button
        className="absolute z-10 top-1/2 left-0 transform -translate-y-1/2"
        onClick={goToPreviousImage}
      >
        <AiFillCaretLeft className="h-8 w-8 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
      </button>
      <button
        className="absolute z-10 top-1/2 right-0 transform -translate-y-1/2"
        onClick={goToNextImage}
      >
        <AiFillCaretRight className="h-8 w-8 text-gray-400 hover:text-gray-600 transition-colors duration-200" />
      </button>
      <Image
        className="w-full sm:h-[85vh] rounded-lg object-cover"
        src={`${images?.images?.[currentImageIndex]}`}
        width={400}
        height={400}
        alt="carousel"
      />
    </div>
  );
}

export default Carousel;
