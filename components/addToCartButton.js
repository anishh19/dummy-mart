import { useSelector, useDispatch } from 'react-redux';
import {
    incrementQuantity,
    decrementQuantity,
  } from '../redux/cart.slice';



function AddToCartButton({data}) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(data);
  return (
    <div className="flex w-full justify-center gap-4 text-xl">
      <button onClick={()=>dispatch(decrementQuantity(data))} className="h-16 w-16 md:h-24 md:w-24 bg-slate-100  text-slate-600 rounded hover:bg-slate-600 hover:text-slate-300 ">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 md:h-12 md:w-12 block m-auto">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
      </svg>

      </button>
      <button onClick={()=>dispatch(incrementQuantity(data))} className="h-16 w-36 md:h-24 md:w-48 bg-slate-600 text-white rounded">
        Add to Cart
      </button>
      <button  onClick={()=>dispatch(incrementQuantity(data))} className="h-16 w-16 md:h-24 md:w-24 bg-slate-100  text-slate-600 rounded hover:bg-slate-600 hover:text-slate-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-8 w-8 md:h-12 md:w-12 block m-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  )
}

export default AddToCartButton