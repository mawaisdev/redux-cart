import { CartItem } from '.'
const img1 =
  'https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4'

export const Cart = () => {
  return (
    <div className='cart'>
      <main>
        <CartItem
          id='11'
          imgSrc={img1}
          name='Mac Book'
          price='1000'
          quantity={1}
          incrementHandler={() => {
            console.log('Incremented')
          }}
          decrementHandler={() => {
            console.log('Decremented')
          }}
          deleteHandler={() => {
            console.log('Deleted')
          }}
        />
      </main>
      <aside>
        <h2>Subtotal: ${200}</h2>
        <h2>Shipping: ${20}</h2>
        <h2>Tax: ${20}</h2>
        <h2>Total: ${20}</h2>
      </aside>
    </div>
  )
}
