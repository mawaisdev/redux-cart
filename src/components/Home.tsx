import toast from 'react-hot-toast'
import { ProductCard } from '.'

const img1 =
  'https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4'

export const Home = () => {
  const productList = [
    {
      name: 'Mac Book',
      price: 12000,
      imgSrc: img1,
      id: 'asdhajsdbhjabhsjdfdfv',
    },
    {
      name: 'Black Shoes',
      price: 490,
      imgSrc: img1,
      id: 'sdjfdlaajsdbhjabhsjdfdfv',
    },
  ]

  const addToCartHandler = (options: any) => {
    console.log(options)
    toast.success('Added to Cart')
  }
  return (
    <div className='home'>
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          handler={() => addToCartHandler({ ...product, quantity: 1 })}
        />
      ))}
    </div>
  )
}
