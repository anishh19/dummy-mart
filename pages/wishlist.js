import { useSelector} from 'react-redux';
import ProductCard from '../components/productCard';

function Wishlist() {
    const wishList = useSelector((state) => state.wishList);
  return (
    <div className='h-screen'>
     <div className='p-10 text-2xl md:text-4xl'>
            Items in your Wishlist : 
        </div>
    <div className='grid grid-cols-2 md:grid-cols-4 p-4 gap-2'>
       
        {wishList?.map((each)=>
            <ProductCard {...each} key={each.id} />)}
        
    </div>
    </div>
  )
}

export default Wishlist