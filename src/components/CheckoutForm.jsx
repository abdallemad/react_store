import { Form,redirect } from "react-router-dom"
import FormInput from "./FormInput"
import SubmitBtn from "./SubmitBtn"
import customFetch,{formatPrice} from "../utils/custom"
import { toast } from "react-toastify"
import { clearCart } from "../features/cart/cartSlice"

export const action = (store,queryClient)=>async({request})=>{
  const formData = await request.formData();
  const {name,address} = Object.fromEntries(formData.entries());
  const token = store.getState().user.user.token;
  const {cartItems,numItemsInCart,orderTotal} = store.getState().cart
  try {
    const response = await customFetch.post('/orders',{ "data": {
        "address":address,
        "cartItems": cartItems,
        "chargeTotal":orderTotal,
        "name": name,
        "numItemsInCart":numItemsInCart,
        "orderTotal":formatPrice(orderTotal)
    }
  },{
    headers:{
      Authorization:`Bearer ${token}`
    }
  })
    //
    queryClient.removeQueries(['orders'])
    // console.log(response.data);
    toast.success('order placed successfully');
    store.dispatch(clearCart());
    return redirect('/orders')
  } catch (error) {
    const errorMassage = error?.response?.data?.error?.massage || 'invalid credentials';
    toast.error('not okay try again');
    if(error.response.status===401) return redirect('/login');
    return null
  }
}

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl capitalize">shipping information</h4>
      <FormInput label={'first name'} name={'name'} type={'text'} />
      <FormInput label={'address'} name={'address'} type={'text'} />
      <SubmitBtn text={'place your order'}/>
    </Form>
  )
}

export default CheckoutForm
