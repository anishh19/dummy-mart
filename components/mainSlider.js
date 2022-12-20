
function MainSlider() {
  return (
    <div className="grow w-full relative" >
        <div id="slide-1" className="h-full w-full absolute translate-x-full">
            <div className="bg-pink-500 h-1/3 w-full">
            </div>
            <div className= "bg-gradient-to-b from-pink-500 to-white h-2/3 w-full"  >
            </div>
        </div>
        <div id="slide-2" className="h-full w-full absolute">
            <div className="bg-green-900 h-1/3 w-full">
            </div>
            <div className= "bg-gradient-to-b from-green-900 to-white l h-2/3 w-full"  >
            </div>
        </div>
        <div id="slide-3" className="h-full w-full absolute -translate-x-full">
            <div className="bg-black h-1/3 w-full">
            </div>
            <div className= "bg-gradient-to-b from-black to-white h-2/3 w-full " >
            </div>
        </div>
        
    </div>
  )
}

export default MainSlider