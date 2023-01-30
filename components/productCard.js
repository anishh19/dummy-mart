import Link from "next/link"
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../redux/wishList.slice';
// dispatch(addToWishlist(props))

function ProductCard(props) {
  const dispatch = useDispatch();
  let wishList = useSelector((state=> state.wishList));
  let isInWishlist = wishList.find(each => each.id === props.id);
  const [isWished, changeStatus] =  useState(isInWishlist ? true : false);
  function toggleHeart(){
    if(isWished){
      changeStatus(false);
      dispatch(removeFromWishlist(props));
    }
    else {changeStatus(true); dispatch(addToWishlist(props));}
  }
  let button;
  if(isWished){
    button = <button>
    <svg id="heart" 
    onClick={() => {toggleHeart()}} 
    xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
    </button>
  }
  else {
    button =
    <button>
      <svg id="heart" 
      onClick={() => { toggleHeart()}}  
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
      </button>
  }
 
  
  return (

    <div className="border-solid border-8 bg-gray-200" key={props.id}>
      <Link href={`/products/${encodeURIComponent(props.id)}`}>
      <div className="h-28">
        <img className="max-h-full" src= {props.thumbnail} alt= {props.title}/>
      </div>
      <h3> {props.title}</h3>
      </Link>
      <h2>${props.price}</h2>
      {button}
      
      
      

      
    </div>
  )
}

export default ProductCard