
import ProductCard from "../../components/productCard";
import Link from "next/link";

function Category() {
  const categories = [
    "Smartphones",
    "Laptops",
    "Fragrances",
    "Skincare",
    "Groceries",
    "Home Decoration",
    "Furniture",
    "Tops",
    "Womens Dresses",
    "Women Shoes",
    "Mens Shirts",
    "Mens Shoes",
    "Mens Watches",
    "Womens Watches",
    "Womens Bags",
    "Womens Jewellery",
    "Sunglasses",
    "Automotive",
    "Motorcycle",
    "Lighting"
]
  return (
    <>
    <h1 className="p-10">
      View products according to categories:
    </h1>
    <div className="grid grid-cols-4 gap-8 p-4">
    {categories.map((each)=><Link className="hover:bg-slate-500 text-center p-4  " href={`/category/${each.split(" ").join("-").toLowerCase()}`}><h2>{each}</h2></Link>)}
    </div>
    </>
  )
}

export default Category