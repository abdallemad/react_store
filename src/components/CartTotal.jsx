import { useSelector } from "react-redux"
import { formatPrice } from "../utils/custom"
const CartTotal = () => {
  const {cartTotal,tax,shipping,orderTotal} = useSelector(store=> store.cart)

  return (
    <div className="bg-base-200 card px-8 py-9 rounded-box">
      <div className="flex justify-between items-center pb-2 border-b border-b-base-300 text-xs capitalize">
        <span>subtotal</span>
        <span className="font-semibold">{formatPrice(cartTotal)}</span>
      </div>
      <div className="flex justify-between items-center pb-2 border-b border-b-base-300 text-xs capitalize mt-2">
        <span>shipping</span>
        <span className="font-semibold">{formatPrice(shipping)}</span>
      </div>
      <div className="flex justify-between items-center pb-2 border-b border-b-base-300 text-xs capitalize mt-2">
        <span>tax</span>
        <span className="font-semibold">{formatPrice(tax)}</span>
      </div>
      <div className="flex justify-between items-center capitalize mt-6 text-sm">
        <span>order total</span>
        <span className="font-semibold">{formatPrice(orderTotal)}</span>
      </div>
    </div>
  )
}

export default CartTotal
