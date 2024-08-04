import { useSelector } from "react-redux"
import {CartItemsList,CartTotal, SectionTitle} from "../components"
import { Link } from "react-router-dom";
const Cart = () => {
  //temp 
  const user = null;

  const {numItemsInCart} = useSelector(store=>store.cart);
  if (numItemsInCart <1){
    return <SectionTitle text={'Your cart is empty'} />
  }
  return (
    <>
      <SectionTitle text={'Shopping Cart'} />
      <div className="grid gap-8 lg:grid-cols-12 mt-8">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotal />
          {user?<Link to={'/checkout'} className="btn btn-primary btn-block mt-8 uppercase font-bold" >
            proceed to checkout
          </Link>:<Link to={'/login'} className="btn btn-primary btn-block mt-8 uppercase font-bold" >
            please login
          </Link>}
        </div>
      </div>
    </>
  )
}

export default Cart
