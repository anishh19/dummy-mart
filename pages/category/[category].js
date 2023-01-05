import Header from "../../components/header";
import Footer from "../../components/footer";
import ProductCard from "../../components/productCard";

function Category( {data} ) {
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

export default Category


export async function getStaticPaths() {
    const response = await fetch('https://dummyjson.com/products/categories');
    const allCategories= await response.json();
    const paths = allCategories.map(each=>{
      return {
        params: {
          category : `${each}`
        }
      };
    })
    
  return {
    paths: paths,
    fallback: false,
  }
}



export async function getStaticProps( context ) {
  const category = context.params.category;
  const response = await fetch(`https://dummyjson.com/products/category/${category}`);
  const productData = await response.json();
  return {
    props: {
      data : productData.products
  }
  }
}