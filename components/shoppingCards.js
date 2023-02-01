import Link from "next/link"

function ShoppingCards() {
  return (<>
    <div className="h-[15rem]">
    </div>
    <div className=" w-full absolute top-[38vh] z-10 grid grid-cols-4 gap-4 p-4">
        <Link href="/products" className="bg-slate-200 h-64 rounded-lg flex flex-col justify-evenly items-center">
            <h2 className="text-center">
              Show all products
            </h2>
            <div>
              <img className="h-36" src="/shopping.png"/>
          </div>
        </Link>
        <Link href="/category/smartphones" className="bg-slate-200 h-64 rounded-lg">
          <div className="text-xl text-center p-4">Shop for latest smartphones</div>
          <img src="/phones.png"/>
        </Link>
        <Link href="/products/44" className="bg-slate-200 h-64 col-span-2 rounded-lg p-4 flex justify-evenly">
          <div>
            <h1 className="py-4">
              Today's Deal
            </h1>
            <h2>
              OPPO F1
            </h2>
            <span className="text-6xl">$230 </span>
            <s className="text-xl text-gray-500"> $280</s> <span className="text-green-500">18% off</span>
          </div>
          <div>
            <img className="h-56" src="/oppo-f19.png"/>
          </div>
        </Link>
        <Link href="/category/furniture" className="bg-slate-200 h-[30rem] col-span-2 rounded-lg">
          <div className="text-2xl text-center p-4">Shop for Furniture</div>
          <div className="px-24">
          <img className="object-fill" src="/furniture.png"/>
          </div>
        </Link>
        <Link href=""  className="bg-slate-200 h-[30rem] rounded-lg p-4 grid grid-cols-2 gap-5">
          <div className="text-xl text-center col-span-2">Upto 70% Off | Styles for Women</div>
          <div className="h-48 text-center "><img className="h-40 object-fill" src="https://i.dummyjson.com/data/products/44/thumbnail.jpg"/>Dresses</div>
          <div className="h-48 text-center px-8"><img className="h-40 object-fill" src="https://i.dummyjson.com/data/products/70/thumbnail.jpg"/>Watches</div>
          <div className="h-48 text-center "><img className="h-40 object-fill" src="https://i.dummyjson.com/data/products/59/thumbnail.jpg"/>Shoes</div>
          <div className="h-48 text-center "> <img className="h-40 object-fill" src="https://i.dummyjson.com/data/products/75/thumbnail.jpg"/>Bags</div>
        </Link>
        
        <Link href="category/groceries" className="bg-slate-200 h-[30rem] rounded-lg flex justify-center items-center p-10 ">
          <img src='/groceries.png'></img>
        </Link>

    </div>
    </>
  )
}

export default ShoppingCards