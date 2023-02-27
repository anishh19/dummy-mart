import { useSelector, useDispatch } from 'react-redux';
import {
    incrementQuantity,
    decrementQuantity,
  } from '../redux/cart.slice';


function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
  
    const getTotalPrice = () => {
      return cart.reduce(
        (accumulator, item) => accumulator + item.quantity * Math.round(item.price-(item.price*item.discountPercentage*0.01)),0
      );
    };
  return (
    <div className='min-h-screen flex gap-2 justify-center flex-col'>
      {cart.map((each)=>
            <div className='flex md:p-5 text-center items-center text-lg bg-gray-300'>
              <div className='w-1/5'>
              <img className='max-h-32' src={each.thumbnail}></img>
              </div>
              <div className='w-1/5'>{each.title}</div>
              <div className='w-1/5'>${Math.round(each.price-(each.price*each.discountPercentage*0.01))}</div>
              <div className='flex w-1/5 justify-evenly '>
                <button className='block m-auto text-4xl'  onClick={()=>dispatch(decrementQuantity(each))}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 md:h-8 md:w-8 block m-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
                </button>
                <div className='py-2'>{each.quantity}</div>
                <button className='block m-auto text-4xl' onClick={()=>dispatch(incrementQuantity(each))}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4 md:h-8 md:w-8 block m-auto">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                </button>
              </div>
              <div className='w-1/5'> ${Math.round(each.price-(each.price*each.discountPercentage*0.01))*each.quantity}
                </div>
            </div> )}
        <div className='text-4xl text-center p-10'>
          Cart Total : ${getTotalPrice()}
        </div>
    </div>
  )
}

export default Cart