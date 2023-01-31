import Head from 'next/head'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart.slice';
import Image from 'next/image';

function Products( {data} ) {
  const dispatch = useDispatch();
    return (
        <>
        <Head>
        <title>{data.title}</title>
        <meta name={data.description} content="Generated by create next app" />
        </Head>
        <div className=" p-16 grid grid-cols-2 h-[80vh]">
            <div className="flex justify-centre p-4 relative">
              <Image fill src= {data.thumbnail} alt= {data.title}/>
            </div>
            <div className="p-6 flex flex-col h-full justify-between">
              <div className="text-4xl">
                  <b>{data.title} </b>
                  <div className=" w-20 flex flex-row justify-center bg-green-500 text-base text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-5 h-5">
                    <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
                  </svg>
                  {data.rating}
                  </div>
              </div>
              <div className="text-2xl"> 
                {data.description}
              </div>
              <div>
                <span className="text-6xl">${Math.round(data.price-(data.price*data.discountPercentage*0.01))} </span>
                <s className="text-xl text-gray-500"> ${data.price}</s> <span className="text-green-500">{Math.round(data.discountPercentage)}% off</span>
              </div>
              <button onClick={() => dispatch(addToCart(data))} className= "w-3/4 py-4 bg-yellow-400 rounded-full flex flex-row justify-center hover:bg-yellow-500">
                <div className="px-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                </div>
                <span className="text-3xl">ADD TO CART</span>
                
              </button>
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