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

  function prevSlide(){
    if(currentSlide>0){
    setSlider(currentSlide-1);
   }
   else setSlider(2)
  }

  function nextSlide(){
    if(currentSlide<2){
      setSlider(currentSlide+1);
     }
     else setSlider(0)
  }
  
  return (
    <div className="grow w-full relative" >
        <button id="prevSlide" onClick={()=>nextSlide()} className="absolute left-0 top-0 z-10">
          ◀
        </button>
        <button id="nextSlide"  onClick={()=>nextSlide()} className="absolute right-0 top-0 z-10">
          ▶
        </button>
        <div id="slide-1" className="h-full w-full absolute  slide ">
            <div className="bg-pink-500 h-1/3 w-full">
            </div>
            <div className= "bg-gradient-to-b from-pink-500 to-white h-2/3 w-full"  >
            </div>
        </div>
        <div id="slide-2" className="h-full w-full absolute slide " >
            <div className="bg-green-900 h-1/3 w-full flex justify-center flex-row p-2">
              <div>
                <div className="text-white">
                  <h1 className="text-5xl text-center bold"> Up to 40% off</h1>
                  <br></br>
                  <h2 className="text-center"> Laptops and Tablets</h2>
                  <br/>
                </div>
                <div className="flex flex-row justify-center gap-5" >
                  <Image width="50" height="50" alt="hi" id='hpLogo' src="/HP_logo.svg"/>
                  <Image width="50" height="50" alt="hi" id='samsungLogo' src="/Samsung_Logo.svg"/>
                  <Image width="50" height="50" alt="hi" id='appleLogo' src="/Apple_logo.svg"/>
                </div>
              </div>
              <div className="p-10">
                  <Image width="200" height="400" alt="hi" id='appleLogo' src="/laptops.png"/>
              </div>
             
            </div>
            <div className= "bg-gradient-to-b from-green-900 to-white l h-2/3 w-full"  >
            </div>
        </div> 
        <div id="slide-3" className="h-full w-full absolute  slide">
            <div className="bg-black h-1/3 w-full">
            </div>
            <div className= "bg-gradient-to-b from-black to-black-100 h-2/3 w-full " >
            </div>
        </div>
        
    </div>
  )
}


export default MainSlider
