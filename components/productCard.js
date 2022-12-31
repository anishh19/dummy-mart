function ProductCard(props) {

  return (
    
    <div className="border-solid border-8" key={props.id}>
      <div>
      <p> {props.id}</p>
      <img src= {props.thumbnail} alt= {props.title}/>
      <h3> {props.title}</h3>
      <h2>${props.price}</h2>
      </div>
    </div>
  )
}

export default ProductCard