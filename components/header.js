import Image from 'next/image'



export function Header() {
    return (
      <div className='flex justify-between py-3 text-xl bg-green-400 w-full p-4'>
          <h1 className='p-1'>
              DummyMart
          </h1>
          <input className='w-3/5' ></input>
          <h2> About </h2>
          <h2> Orders</h2>
          <div>
          <Image width="50" height="50" alt="hi" id='cart' src='/cart-shopping-solid.svg'/>
          </div>
      </div>
    )
  }
  
  export default Header;