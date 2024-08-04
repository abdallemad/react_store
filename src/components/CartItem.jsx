import { removeItem,editItem } from "../features/cart/cartSlice"
import {formatPrice, generateAmount} from '../utils/custom'
import { useDispatch } from "react-redux";
const CartItem = ({cartItem}) => {
  const dispatch = useDispatch()
  const {cartID, image, title, amount, productColor,company,price} = cartItem;
  return (
    <article key={cartID} className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-b-base-300 pb-6 last:border-b-0">
      <img src={image} alt={title}  className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"/>
      <div className="sm:ml-16 sm:w-48">
        <h3 className="font-semibold text-lg capitalize">{title}</h3>
        <h5 className="text-md mt-2 text-neutral-content">{company}</h5>
        <p className="flex gap-x-1 capitalize items-center text-sm mt-4">
          color:
          <span className="badge badge-sm" style={{background:productColor}}></span>
        </p>
      </div>

      <div className="sm:ml-24">
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">
              Amount
            </span>
          </label>
          <select name="amount" id="amount" className="mt-4 select select-xs select-bordered " value={amount} onChange={(e)=>{
            dispatch(editItem({cartID,amount:+e.target.value}))
          }}>
            {
              generateAmount(10).map(i=>{
                return <option value={i} key={i}>{i}</option>
              })
            }
          </select>
        </div>
        <div className="link link-hover link-primary mt-2" onClick={()=>dispatch(removeItem({cartID}))}>
          remove
        </div>
      </div>

      <p className="font-medium sm:ml-auto">
        {formatPrice(price)}
      </p>
    </article>
  )
}

export default CartItem
