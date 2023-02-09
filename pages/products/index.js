import { useState,useEffect, use } from "react";
import ProductCard from "../../components/productCard";



function Products( {data} ) {
    const [page, changePage] = useState(0);
    const [pageData, changeData] = useState(data);
    async function fetchPage(page){
        const response=  await fetch(`https://dummyjson.com/products?limit=20&skip=${page*20}`)
        const productData = await response.json();
        changeData(productData.products);
        if(page>0)
        window.scrollTo(0, 0);
    }

    useEffect(()=>{
        fetchPage(page);
    },[page])

    return (
        <>      
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 p-10">
        
        {pageData.map((each)=>
            <ProductCard {...each} key={each.id} />)}
        </div>
        <div className="w-full flex gap-10 justify-center text-xl">
            {[1,2,3,4,5].map((each)=>
            <button id={each} key={each} onClick={()=>changePage(each-1)} className="w-12 h-12 hover:bg-slate-200 ">{each}</button>
            )}
        </div>
        <div className="w-full text-center text-xl py-4"> Page {page+1} of 5</div>
        </>  


    )
}

export default Products


export async function getStaticProps() {
    const response = await fetch('https://dummyjson.com/products?limit=20');
    const productData = await response.json();
    return {
      props: {
        data : productData.products
    }
    }
}