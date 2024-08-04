import CartItem from "./CartItem"
import { useSelector } from "react-redux"
const CartItemsList = () => {
  const {cartItems} = useSelector(store=>store.cart);

  return (
    <div>
      {
        cartItems.map(item=>{
          return <CartItem cartItem={item} key={item.cartID} />
        })
      }
    </div>
  )
}

export default CartItemsList
