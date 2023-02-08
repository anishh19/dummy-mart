import Link from "next/link"

function ShoppingCards() {
  return (<>
    <div className="h-80 md:h-[15rem]">
    </div>
    <div className=" w-full absolute top-60 md:top-[38vh] z-10 grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        <Link href="/products" className="bg-slate-200 h-40 md:h-64 rounded-lg flex flex-col justify-evenly items-center">
            <div className="text-center">
              Show all products
            </div>
            <div>
              <img className="h-24 md:h-36" src="/shopping.png"/>
          </div>
        </Link>
        <Link href="/category/smartphones" className="bg-slate-200 h-40 md:h-64 rounded-lg">
          <div className=" text-sm md:text-xl text-center p-2 md:p-4">Shop for latest smartphones</div>
          <img src="/phones.png"/>
        </Link>
        <Link href="/products/44" className="bg-slate-200 h-48 md:h-64 col-span-2 rounded-lg p-4 flex justify-evenly">
          <div>
            <div className="py-4 text-3xl">
              Today's Deal
            </div>
            <div className="">
              OPPO F1
            </div>
            <span className="text-5xl">$230 </span>
            <s className="text-xl text-gray-500"> $280</s> <span className="text-green-500">18% off</span>
          </div>
          <div>
            <img className="h-36 md:h-56" src="/oppo-f19.png"/>
          </div>
        </Link>
        <Link href="/category/furniture" className="bg-slate-200 md:h-[30rem] md:col-span-2 rounded-lg">
          <div className="text-2xl text-center p-4">Shop for Furniture</div>
          <div className="py-10 md:px-28 ">
            <img className="object-contained" src="/furniture.png"/>
          </div>
        </Link>
        <div href=""  className="bg-slate-200 md:h-[30rem] rounded-lg p-4 grid grid-cols-2 gap-5">
          <div className="md:text-xl text-center col-span-2">Upto 70% Off | Styles for Women</div>
          <Link href="/category/womens-dresses" className="h-24 md:h-36 text-center "><img className="h-20 md:h-40 object-contain" src="https://i.dummyjson.com/data/products/44/thumbnail.jpg"/>Dresses</Link>
          <Link href="/category/womens-watches" className="h-24 md:h-36 text-center md:px-8"><img className="h-20 md:h-40 object-contain" src="https://i.dummyjson.com/data/products/70/thumbnail.jpg"/>Watches</Link>
          <Link href="/category/womens-shoes" className="h-24 md:h-36 text-center "><img className="h-20 md:h-40 object-contain" src="https://i.dummyjson.com/data/products/59/thumbnail.jpg"/>Shoes</Link>
          <Link href="/category/womens-bags" className="h-24 md:h-36 text-center "> <img className="h-20 md:h-40 object-contain" src="https://i.dummyjson.com/data/products/75/thumbnail.jpg"/>Bags</Link>
        </div>
        
        <Link href="category/groceries" className="bg-slate-200 h-64 md:h-[30rem] rounded-lg flex justify-center items-center p-10 col-span-2 md:col-span-1">
          <img className="object-contain p-10" src='/groceries.png'></img>
        </Link>

    </div>
    </>
  )
}

export default ShoppingCards