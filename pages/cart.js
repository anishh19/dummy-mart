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
    <div>
      {cart.map((each)=>
            <div className='flex p-10 text-center items-center'>
              <div className='w-1/5'>
              <img className='max-h-32' src={each.thumbnail}></img>
              </div>
              <h3 className='w-1/5'>{each.title}</h3>
              <h3 className='w-1/5'>${Math.round(each.price-(each.price*each.discountPercentage*0.01))}</h3>
              <div className='flex w-1/5 justify-evenly '>
                <button className='text-4xl'  onClick={()=>dispatch(decrementQuantity(each.id))}>-</button>
                <h3>{each.quantity}</h3>
                <button className='text-4xl' onClick={()=>dispatch(incrementQuantity(each.id))}>+</button>
              </div>
              <h3 className='w-1/5'> ${Math.round(each.price-(each.price*each.discountPercentage*0.01))*each.quantity}
                </h3>
            </div> )}
        <div className='text-4xl text-center p-10'>
          Cart Total : ${getTotalPrice()}
        </div>
    </div>
  )
}

export default Cart