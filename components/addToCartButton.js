import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import {
    incrementQuantity,
  } from '../redux/cart.slice';



function AddToCartButton({data}) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log(data);
  function addToCart(){
        dispatch(incrementQuantity(data))
        const confirmation = document.createElement("div");
        confirmation.innerText = "Item added to cart!";
        confirmation.classList.add("text-xl", "bg-green-500", "text-white", "font-bold", "py-2", "px-4", "rounded", "absolute", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "z-50", "flex", "items-center", "justify-center");
        document.body.appendChild(confirmation)
        setTimeout(() => {
          confirmation.remove();
        }, 1000);
  }

  return (
    <div className="flex  w-full justify-center gap-4 text-xl">
      <button onClick={()=>addToCart()} className="h-16 w-full md:h-24 md:w-48 bg-slate-600 text-white rounded">
        Add to Cart
      </button>
      <Link onClick={()=>  dispatch(incrementQuantity(data))} href="/cart" className="flex justify-center items-center h-16 w-36 md:h-24 md:w-48 bg-slate-600 text-white rounded" >
        Buy Now
      </Link>
 
    </div>
  )
}

export default AddToCartButton