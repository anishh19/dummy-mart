import { useSelector} from 'react-redux';
import ProductCard from '../components/productCard';

function Wishlist() {
    const wishList = useSelector((state) => state.wishList);
  return (
    <>
     <h1 className='p-10'>
            Items in your wishList
        </h1>
    <div className='grid grid-cols-4 p-4 gap-2'>
       
        {wishList?.map((each)=>
            <ProductCard {...each} key={each.id} />)}
        
    </div>
    </>
  )
}

export default Wishlist