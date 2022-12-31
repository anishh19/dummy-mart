import Image from 'next/image'



export function Header() {
    return (
      <div className='flex justify-between py-3 text-xl bg-slate-600 w-full p-4 text-white'>
          <h1 className='p-1'>
              DummyMart
          </h1>
          <div className='w-3/5 flex flex-row align-center justify-center p-3 bg-white'>
            <input className='w-5/6' type="text">        
            </input>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
            </svg> 
          </div>
          
          <h2> About </h2>
          <h2> Orders</h2>
          <div>
          <Image width="50" height="50" alt="hi" id='cart' src='/cart-shopping-solid.svg'/>
          </div>
      </div>
    )
  }
  
  export default Header;