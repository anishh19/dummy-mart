import Image from "next/image";
import { useEffect, useState } from "react";

function ImageSlider({ props }) {
  const [slidePosition, changeSlide] = useState(0);
  useEffect(() => {
    let slides = document.querySelectorAll(".slides");
    console.log(slides);
    let i = slidePosition;
    slides.forEach((slide) => {
      slide.style.transform = `translate(${i * 100}%)`;
      i--;
    });
  }, [slidePosition]);

  return (
    <div className="p-10  md:p-2">
      <div className="flex flex-row md:justify-center align-middle">
        <div className="w-80 h-96 overflow-x-hidden relative ">
          {props.map((each) => (
            <img className="absolute slides w-full max-h-96" src={each}></img>
          ))}
        </div>
      </div>
      <div className="max-w-full h-12 flex flex-row justify-evenly m-2">
        {props.map((each, index) => (
          <img onClick={() => changeSlide(index)} src={each}></img>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
