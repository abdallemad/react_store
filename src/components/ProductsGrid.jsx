import { useLoaderData,Link } from "react-router-dom";
import {formatPrice} from '../utils/custom'
const ProductsGrid = () => {
  
  const {data} = useLoaderData();
  // console.log(data)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-16 gap-4">
      {data.map(item=>{
        const {id, attributes} = item
        const{image,title,price} = attributes;
        const DolarsAmount = formatPrice(price)
        return <Link className="card bg-base-100 w-full shadow-xl cursor-pointer" key={id} to={`/products/${id}`}>
                <figure className="px-4 pt-4">
                  <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl h-[12rem] w-[100%] object-cover" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title capitalize">{title}</h2>
                  <p className="text-secondary">{DolarsAmount}</p>
                </div>
              </Link>
      })}
    </div>
  )
}

export default ProductsGrid
