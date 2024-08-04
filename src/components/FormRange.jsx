import { useEffect, useState } from "react"
import { formatPrice } from "../utils/custom"
const FormRange = ({label,name,size,price}) => {
  const step = 100;
  const maxPrice = 100000;
  const [selectedPrice,setSelectedPrice] = useState(price || maxPrice);
  return (
    <div className="form-control ">
      <label className="label text-lg" htmlFor={name}>
        <span className="label-text capitalize">{label}</span>
        <span className="label-text-alt capitalize font-semibold text-lg">{formatPrice(selectedPrice)}</span>
      </label>
      <input type="range" min={0} max={maxPrice} step={step} name={name} value={selectedPrice} onChange={(e)=>setSelectedPrice(e.target.value)} className={`range range-primary ${size}`}/>
      <div className="label font-bold">
        <span className="label-text-alt">0</span>
        <span className="label-text-alt text-md">Max: {formatPrice(maxPrice)}</span>
      </div>
    </div>
  )
}

export default FormRange
