import { useSelector } from "react-redux"
import { CheckoutForm,SectionTitle,CartTotal } from "../components"
import { redirect } from "react-router-dom"
import { toast } from "react-toastify";

export const loader =(store)=> async ({request})=>{
  const {user} = store.getState().user;
  // console.log(user);
  if(!user){ 
    toast.warn('not authorized to access.')
    return redirect('/login')
  }
  return null
}

const Checkout = () => {
  const cartTotal = useSelector(store=>store.cart.cartTotal)
  if(cartTotal == 0){
    return <SectionTitle text={'your cart is empty'} />
  }
  return (  
    <>
      <SectionTitle text={'place your order'} />
      <div className="grid gap-8 mt-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotal />
      </div>
    </>
  )
}

export default Checkout
