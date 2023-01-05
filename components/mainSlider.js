import react,{useState, useEffect} from "react";
import Image from "next/image";
import { flushSync } from "react-dom";

function MainSlider() {
  const [currentSlide, setSlider] = useState(0);
  useEffect(()=>{
      let i=currentSlide;
      console.log("nextttrunnn");
      const slides = document.querySelectorAll(".slide");
      slides.forEach((slide)=> {
        slide.style.transform = `translate(${i*100}%)`
        console.log(slide)
        i--;
      })
    },[currentSlide]);

  function nextSlide(){
    if(currentSlide>0){
    setSlider(currentSlide-1);
   }
   else setSlider(2)
  }

  function prevSlide(){
    if(currentSlide<2){
      setSlider(currentSlide+1);
     }
     else setSlider(0)
  }
  
  return (
    <div className="relative h-screen w-full overflow-x-hidden" >
        <button id="prevSlide" onClick={()=>prevSlide()} className="absolute h-56 left-0 z-10 hover:border-2 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="White" className="w-10 h-10">
          <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
          </svg>
        </button>
        <button id="nextSlide"  onClick={()=>nextSlide()} className="absolute h-56 right-0 z-10 hover:border-2 rounded">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-10 h-10">
          <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
          </svg>
        </button>
        <div id="slide-1" className="h-full w-full absolute slide ">
            <div className="bg-pink-800 h-1/3 w-full p-4 text-center flex justify-center gap-4 ">
              <img className="w-1/4" src="/cards.png" alt="cards"/>
              <h2 className="text-white w-1/4 py-5">
                Get flat 10% discount on Credit Cards.
              </h2>
              
            </div>
            <div className= "bg-gradient-to-b from-pink-800 to-white h-2/3 w-full"  >
            </div>
        </div>
        <div id="slide-2" className="h-full w-full absolute slide" >
            <div className="bg-rose-500 h-1/3 w-full flex justify-center flex-row p-2">
              <div>
                <div className="text-white">
                  <h1 className="text-5xl text-center bold"> Up to 40% off</h1>
                  <br></br>
                  <h2 className="text-center"> Laptops and Tablets</h2>
                  <br/>
                </div>
                <div className="flex flex-row justify-center gap-5" >
                  <Image width="50" height="50" alt="hpLogo" id='hpLogo' src="/HP_logo.svg"/>
                  <Image width="50" height="50" alt="samsungLogo" id='samsungLogo' src="/Samsung_Logo.svg"/>
                  <Image width="50" height="50" alt="appleLogo" id='appleLogo' src="/Apple_logo.svg"/>
                </div>
              </div>
              <div className="p-10">
                  <Image width="200" height="400" alt="hi" id='appleLogo' src="/laptops.png"/>
              </div>
             
            </div>
            <div className= "bg-gradient-to-b from-rose-500 to-white l h-2/3 w-full"  >
            </div>
        </div> 
        <div id="slide-3" className="h-full w-full absolute slide">
            <div className="bg-red-300 h-1/3 w-full">
            </div>
            <div className= "bg-gradient-to-b from-red-300 to-white h-2/3 w-full " >
            </div>
        </div>
        
    </div>
  )
}


export default MainSlider
