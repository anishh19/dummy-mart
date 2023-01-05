import Header from "../../components/header";
import ProductCard from "../../components/productCard";
import Footer from "../../components/footer";

function Products( {data} ) {
    return (
        <>
        <Header/>
        <div className="grid  grid-cols-5 gap-10 p-4">
        {data.map((each)=>
            <ProductCard {...each} key={each.id} />)}
        </div>
        <Footer/>
        </>

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