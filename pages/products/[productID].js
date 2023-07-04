import Head from "next/head";
import { useDispatch } from "react-redux";
import ImageSlider from "../../components/imageSlider";
import { useRouter } from "next/router";
import { addToCart } from "../../redux/cart.slice";
import toast from "react-hot-toast";

function Products({ data }) {
  const dispatch = useDispatch();
  const router = useRouter();
  function handleAddToCart() {
    dispatch(addToCart(data));
    toast.success(`Added ${data.title} To Cart`);
  }
  function handleBuyNow() {
    dispatch(addToCart(data));
    router.push("/cart");
  }
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name={data.description} content={data.title} />
      </Head>
      <div className="p-4 md:p-16 h-auto grid grid-cols-1 md:grid-cols-2 ">
        <div className=" md:py-24 relative">
          <ImageSlider props={data.images} />
        </div>

        <div className="p-4 flex flex-col h-full justify-between gap-6">
          <div className="text-4xl ">
            <div className="py-1">
              <b>{data.title} </b>
            </div>
            <div className="w-12 px-2 py-1 gap-1 flex rounded-md flex-row justify-center bg-green-500 text-sm text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="white"
                class="w-5 h-5 "
              >
                <path
                  fill-rule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clip-rule="evenodd"
                />
              </svg>
              <span> {data.rating}</span>
            </div>
          </div>
          <div className="md:text-2xl">{data.description}</div>
          <div>
            <span className="text-6xl">
              $
              {Math.round(
                data.price - data.price * data.discountPercentage * 0.01
              )}{" "}
            </span>
            <s className="text-xl text-gray-500"> ${data.price}</s>{" "}
            <span className="text-green-500">
              {Math.round(data.discountPercentage)}% off
            </span>
          </div>
          <div className="flex text-lg md:text-2xl text-white w-full justify-evenly">
            <button
              onClick={() => {
                handleAddToCart();
              }}
              className="flex items-center gap-4 justify-evenly rounded-md px-4 py-4 md:px-8 md:py-4 bg-amber-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span>Add To Cart</span>
            </button>
            <button
              onClick={() => {
                handleBuyNow();
              }}
              className="flex items-center gap-4 justify-evenly  rounded-md px-4 py-4 md:px-8 md:py-4 bg-orange-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>

              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;

export async function getStaticPaths() {
  const response = await fetch("https://dummyjson.com/products?limit=90");
  const productData = await response.json();
  const productArray = await productData.products;
  const paths = productArray.map((each) => {
    return {
      params: {
        productID: `${each.id}`,
      },
    };
  });

  return {
    paths: paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const productID = context.params.productID;
  const response = await fetch(`https://dummyjson.com/products/${productID}`);
  const productData = await response.json();
  console.log(productData);
  return {
    props: {
      data: productData,
    },
  };
}
