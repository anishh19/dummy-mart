import React from 'react'
import ProductCard from '../../components/productCard';

function Search({data} ) {
  return (
        <>
        <div className='text-4xl p-10'> Search results: </div>
        <div className="grid grid-cols-5 gap-10 p-10">
            {data.map((each)=>
                <ProductCard {...each} key={each.id} />)}
        </div>
        </>
      
  )
}
export default Search

export async function getServerSideProps( context ) {
    const query = context.params.query;
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const productData = await response.json();
    return {
      props: {
        data : productData.products
    }
    }
  }