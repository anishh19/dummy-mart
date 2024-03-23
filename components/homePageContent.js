import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

function HomePageContent() {
  const [currentSlide, setSlider] = useState(2);
  useEffect(() => {
    let i = currentSlide;
    const gradientContainer = document.querySelector(".gradientContainer");
    const slides = document.querySelectorAll(".slide");
    const pink = "rgb(157 23 77)";
    const rose = "rgb(244 63 94)";
    const red = "rgb(252 165 165)";
    let gradientColor;
    console.log(`Slide :${i}`);
    switch (i) {
      case 0:
        gradientColor = pink;
        break;
      case 1:
        gradientColor = rose;
        break;
      case 2:
        gradientColor = red;
        break;
    }
    setTimeout(function () {
      gradientContainer.style.backgroundImage = `linear-gradient(${gradientColor}, white)`;
    }, 500);
    slides.forEach((slide) => {
      slide.style.transform = `translate(${i * 100}%)`;
      i--;
    });
  }, [currentSlide]);

  function nextSlide() {
    if (currentSlide > 0) {
      setSlider(currentSlide - 1);
    } else setSlider(2);
  }

  function prevSlide() {
    if (currentSlide < 2) {
      setSlider(currentSlide + 1);
    } else setSlider(0);
  }

  return (
    <div className="relative w-full overflow-x-hidden">
      <button
        id="prevSlide"
        onClick={() => prevSlide()}
        className="absolute h-56 md:h-56 left-0 z-10 hover:border-2 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="White"
          className="w-10 h-10"
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        id="nextSlide"
        onClick={() => nextSlide()}
        className="absolute h-56 md:h-56 right-0 z-10 hover:border-2 rounded"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="w-10 h-10"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        id="slide-1"
        className="h-56 w-full absolute slide transition-all ease-in-out duration-1000"
      >
        <div className="h-56 bg-pink-800  w-full  text-center flex justify-center md:p-2 p-10">
          <img
            className="object-fill p-4 md:p-0"
            src="/cards.png"
            alt="cards"
          />
          <div className="text-white w-1/4 md:text-3xl py-5">
            Get flat 10% discount on Credit Cards.
          </div>
        </div>
      </div>
      <div
        id="slide-2"
        className="h-56 w-full absolute slide transition-all ease-in-out duration-1000"
      >
        <div className="h-56 bg-rose-500 w-full flex justify-center gap-2 md:gap-10 flex-row p-10">
          <div>
            <div className="text-white">
              <div className="text-xl md:text-5xl text-center bold">
                {" "}
                Up to 40% off
              </div>
              <div className="text-center text-xl"> Laptops and Tablets</div>
              <br />
            </div>
            <div className="flex w-fill justify-center h-12 flex-row gap-2">
              <div className="relative h-8 w-8">
                <Image fill alt="hpLogo" id="hpLogo" src="/HP_logo.svg" />
              </div>
              <div className="relative h-8 w-8">
                <Image
                  fill
                  alt="samsungLogo"
                  id="samsungLogo"
                  src="/Samsung_Logo.svg"
                />
              </div>
              <div className="relative h-8 w-8">
                <Image
                  fill
                  alt="appleLogo"
                  id="appleLogo"
                  src="/Apple_logo.svg"
                />
              </div>
            </div>
          </div>
          <div className="overflow-hidden w-1/3 md:w-1/5  relative pt-2">
            <Image fill alt="laptop" id="laptopImage" src="/laptops.png" />
          </div>
        </div>
      </div>
      <div
        id="slide-3"
        className="h-56 w-full absolute slide transition-all ease-in-out duration-1000"
      >
        <div className=" h-56 bg-red-300 w-full py-6 px-10 text-center flex justify-center gap-4">
          <img className="object-contain" src="/festival.png" alt="gifts" />
          <div className="text-red-800 text-base md:text-4xl w-1/4 md:py-6">
            Get deals like never before this festive season.
          </div>
        </div>
      </div>
      <div className="w-full h-56"></div>
      <div className="gradientContainer w-full grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <Link
          href="/products"
          className="bg-slate-200 h-40 md:h-64 rounded-lg flex flex-col justify-evenly items-center"
        >
          <div className="text-center md:text-2xl">Show all products</div>
          <div className="p-2">
            <img className="h-24 md:h-40" src="/shopping.png" />
          </div>
        </Link>
        <Link
          href="/category/smartphones"
          className="bg-slate-200 h-40 md:h-64 rounded-lg"
        >
          <div className=" text-sm md:text-2xl text-center p-2 md:p-4">
            Shop for latest smartphones
          </div>
          <img src="/phones.png" className="p-4" />
        </Link>
        <Link
          href="/products/4"
          className="bg-slate-200 h-48 md:h-64 col-span-2 rounded-lg p-4 flex justify-evenly"
        >
          <div>
            <div className="py-4 text-3xl md:text-5xl">Today's Deal</div>
            <div className="md:text-2xl">OPPO F1</div>
            <span className="text-3xl md:text-5xl">$230 </span>
            <s className="text-xl text-gray-500"> $280</s>{" "}
            <span className="text-green-500">18% off</span>
          </div>
          <div>
            <img className="h-36 md:h-56" src="/oppo-f19.png" />
          </div>
        </Link>
        <Link
          href="/category/furniture"
          className="bg-slate-200 md:h-[30rem] md:col-span-2 rounded-lg"
        >
          <div className="text-2xl text-center p-4">Shop for Furniture</div>
          <div className="py-10 px-2 md:px-28 ">
            <img className="object-contained" src="/furniture.png" />
          </div>
        </Link>
        <div
          href=""
          className="bg-slate-200 md:h-[30rem] rounded-lg p-4 grid grid-cols-2 gap-5"
        >
          <div className="md:text-2xl text-center col-span-2">
            Upto 70% Off | Styles for Women
          </div>
          <Link
            href="/category/womens-dresses"
            className="h-24 md:h-36 text-center "
          >
            <img
              className="h-20 md:h-40 object-contain"
              src="https://i.dummyjson.com/data/products/44/thumbnail.jpg"
            />
            Dresses
          </Link>
          <Link
            href="/category/womens-watches"
            className="h-24 md:h-36 text-center md:px-8"
          >
            <img
              className="h-20 md:h-40 object-contain"
              src="https://i.dummyjson.com/data/products/70/thumbnail.jpg"
            />
            Watches
          </Link>
          <Link
            href="/category/womens-shoes"
            className="h-24 md:h-36 text-center "
          >
            <img
              className="h-20 md:h-40 object-contain"
              src="https://i.dummyjson.com/data/products/59/thumbnail.jpg"
            />
            Shoes
          </Link>
          <Link
            href="/category/womens-bags"
            className="h-24 md:h-36 text-center "
          >
            {" "}
            <img
              className="h-20 md:h-40 object-contain"
              src="https://i.dummyjson.com/data/products/75/thumbnail.jpg"
            />
            Bags
          </Link>
        </div>

        <Link
          href="category/groceries"
          className="bg-slate-200 h-64 md:h-[30rem] rounded-lg flex justify-center items-center p-10 col-span-2 md:col-span-1"
        >
          <img
            className="object-contain md:p-4 p-10"
            src="/Groceries.png"
          ></img>
        </Link>
      </div>
    </div>
  );
}

export default HomePageContent;
