import { AiFillDelete } from 'react-icons/ai'

type CartItemProps = {
  id: string
  imgSrc: string
  name: string
  price: string
  quantity: number
  decrementHandler: any
  incrementHandler: any
  deleteHandler: any
}

export const CartItem = ({
  id,
  imgSrc,
  name,
  quantity,
  price,
  decrementHandler,
  incrementHandler,
  deleteHandler,
}: CartItemProps) => {
  return (
    <div className='cartItem'>
      <img src={imgSrc} alt={name} />
      <article>
        <h3>{name}</h3>
        <p>{quantity}</p>
        <p>$ {price}</p>
      </article>

      <div>
        <button onClick={() => decrementHandler(id)}>-</button>
        <p>{quantity}</p>
        <button onClick={() => incrementHandler(id)}>+</button>
      </div>
      <AiFillDelete onClick={() => deleteHandler(id)} />
    </div>
  )
}
