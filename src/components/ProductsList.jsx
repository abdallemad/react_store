import { useLoaderData,Link } from "react-router-dom";
import {formatPrice} from '../utils/custom'
const ProductList = () => {
  
  const {data} = useLoaderData();
  // console.log(data)
  return (
    <div className="mt-16 grid gap-y-8">
      {data.map(item=>{
        const {id, attributes} = item
        const{image,title,price,company} = attributes;
        const DolarsAmount = formatPrice(price)
        return <Link
                  key={id}
                  to={`/products/${id}`}
                  className='p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group'
                >
                  <img 
                    src={image} 
                    alt={title}
                    className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover transition group-hover:scale-125 duration-150" 
                    />
                    <div className="ml-0 sm:ml-16">
                      <h3 className="capitalize font-medium text-lg">{title}</h3>
                      <h4 className="capitalize text-neutral-content font-medium ">{company}</h4>
                    </div>
                    <h5 className="text-lg font-bold ml-0 sm:ml-auto">{DolarsAmount}</h5>
              </Link>
      })}
    </div>
  )
}

export default ProductList
