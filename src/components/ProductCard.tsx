export type ProductCardProps = {
  id: string
  name: string
  price: number
  imgSrc: string
  handler: any
}

export const ProductCard = ({
  imgSrc,
  name,
  price,
  handler,
}: ProductCardProps) => {
  return (
    <div className='productCard'>
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
      <h4>${price}</h4>
      <button onClick={() => handler()}>Add to Cart</button>
    </div>
  )
}
