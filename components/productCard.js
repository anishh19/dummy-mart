import Link from "next/link"

function ProductCard(props) {

  return (
    
    <div className="border-solid border-8 bg-gray-200" key={props.id}>
      <Link href={`/products/${encodeURIComponent(props.id)}`}>
      <div className="h-28">
        <img className="max-h-full" src= {props.thumbnail} alt= {props.title}/>
      </div>
      <h3> {props.title}</h3>
      <h2>${props.price}</h2>
      </Link>
    </div>
  )
}

export default ProductCard