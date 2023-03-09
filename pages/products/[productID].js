import Head from 'next/head'

import AddToCartButton from '../../components/addToCartButton';
import ImageSlider from '../../components/imageSlider';


function Products( {data} ) {

    return (
        <>
        <Head>
        <title>{data.title}</title>
        <meta name={data.description} content={data.title} />
        </Head>
        <div className="p-4 md:p-16 min-h-screen h-auto grid grid-cols-1 md:grid-cols-2 ">
        <ImageSlider props={data.images} />
        <div className="p-4 flex flex-col h-full justify-between gap-6">
              <div className="text-4xl ">
                <div className='py-1 text-3xl font-bold'><b>{data.title} </b></div>
                  <div className=" w-8 flex flex-row justify-center bg-green-500 text-sm text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                  {data.rating}
                  </div>
              </div>
              <div className="text-lg"> 
                {data.description}
              </div>
              <div>
                <span className="text-2xl font-bold text-green-500">${Math.round(data.price-(data.price*data.discountPercentage*0.01))} </span>
                <s className="text-base line-through"> ${data.price}</s> <span className="text-base font-bold text-gray-500">{Math.round(data.discountPercentage)}% off</span>
              </div>
              <AddToCartButton data={data}/>
         </div>
        </div>
        </>

    )
}

export default Products

export async function getStaticPaths() {
      const response = await fetch('https://dummyjson.com/products?limit=100');
      const productData = await response.json();
      const productArray = await productData.products;
      const paths = productArray.map(each=>{
        return {
          params: {
            productID : `${each.id}`
          }
        };
      })
      
    return {
      paths: paths,
      fallback: false,
    }
  }
  

export async function getStaticProps( context ) {
    const productID = context.params.productID;
    const response = await fetch(`https://dummyjson.com/products/${productID}`);
    const productData = await response.json();
    console.log(productData)
    return {
      props: {
        data : productData
    }
    }
}