import { useLoaderData,Link } from "react-router-dom"
import customFetch, { formatPrice,generateAmount } from "../utils/custom";
import { addItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const singleProductQuery = (id)=>{
  return {
    queryKey:['singleProduct',id],
    queryFn: () =>customFetch(`/products/${id}`),
  }
}

export const loader =(queryClient)=> async({params})=>{
  const {data} =await queryClient.ensureQueryData(singleProductQuery(params.id))
  
  return data?.data
}
const SingleProduct = () => {
  const dispatch = useDispatch();
  const {attributes,id} = useLoaderData()
  const {image,title,company,price,description,colors} = attributes
  const dolarPrice = formatPrice(price);
  const [productColor,setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const Amount = generateAmount(20);

  const cartProduct ={
    cartID:`${id}${productColor}`,
    productId:id,
    image,
    title,
    company,
    amount,
    productColor,
    price
  }

  const addToCart = ()=>{
    dispatch(addItem({product:cartProduct}))
  }
  return (
    <section >
      <div className="breadcrumbs text-sm">
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/products'}>Products</Link></li>
        </ul>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mt-8">
        <figure>
          <img 
            src={image}
            alt="" 
            className="w-[25rem] h-[23rem] lg:h-[24rem] lg:w-[34rem] rounded-box object-cover"/>
        </figure>
        <div>
          <h2 className="font-bold text-3xl capitalize">{title}</h2>
          <h3 className="font-bold text-xl my-3 text-neutral-content">{company}</h3>
          <p className="text-lg">{dolarPrice}</p>
          <p className="leading-8 mt-6">
            {description}
          </p>
          <div className="mt-6">
            <h6 className="text-md font-medium tracking-wider ">Colors</h6>
            <div className="flex  mt-2">
              {colors.map(color=>{
              
              return (
                <button
                  key={color}
                  type='button'
                  className={`badge  w-6 h-6 mr-2  ${
                    color === productColor && 'border-2 border-secondary'
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setProductColor(color)}
                ></button>
              )})}
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="amount">
              <h4 className="text-md font-medium tracking-wider ">Amount</h4>
            </label>
            <select className="select select-primary w-full max-w-xs mt-4" 
            onChange={(e)=>setAmount(+e.target.value)} value={amount}>
              {Amount.map(AMOUNT=>{
                return <option value={AMOUNT} key={AMOUNT}>
                  {AMOUNT}
                </option>
              })}
            </select>
          </div>
          <button className="btn btn-primary mt-10 uppercase" onClick={addToCart}>add to bag</button>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct
