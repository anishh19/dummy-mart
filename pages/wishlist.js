import { useSelector } from "react-redux";
import ProductCard from "../components/productCard";

function Wishlist() {
  const wishList = useSelector((state) => state.wishList);
  return (
    <div className="min-h-screen">
      <h1 className="text-2xl p-10">Items in your Wishlist :</h1>
      <div className="grid grid-cols-4 p-4 gap-2">
        {wishList?.map((each) => (
          <ProductCard {...each} key={each.id} />
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
