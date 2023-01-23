
import ProductCard from "../../components/productCard";


function Products( {data} ) {
    return (

       
        <div className="grid  grid-cols-5 gap-10 p-4">
        {data.map((each)=>
            <ProductCard {...each} key={each.id} />)}
        </div>


    )
}

export default Products


export async function getStaticProps() {
    const response = await fetch('https://dummyjson.com/products?limit=100');
    const productData = await response.json();
    return {
      props: {
        data : productData.products
    }
    }
}