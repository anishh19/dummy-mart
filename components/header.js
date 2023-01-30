import Link from 'next/link';
import { useSelector } from 'react-redux';
import { use, useEffect } from 'react';



export function Header() {
  const cart = useSelector((state) => state.cart);
  useEffect(()=>{
    
  },[])

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

    return (
      <div className='flex justify-between py-3 text-xl bg-gray-800 w-full p-5 text-white'>
          <Link href="/">
          <h1 className='p-1'>
              DummyMart
          </h1>
          </Link>
          <form className='w-2/5 h-12 flex flex-row align-center justify-between '>
            <input className='grow text-black p-2 rounded-l-xl' type="text">        
            </input>
            <button  className='w-12'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black"  className='bg-white rounded-r-xl'>
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
            </svg> 
            </button>
          </form>
          <div className='flex justify-between w-32'>
          <Link href="/wishlist">
          <svg  xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
          </Link>
          <Link href="/cart">
            <div className='absolute top-0 right-4'>
              {getItemsCount()}
            </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-12">
             <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
          </svg>
          </Link>
          </div>
      </div>
    )
  }
  
  export default Header;