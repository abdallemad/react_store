import { useState } from "react"
import ProductsGrid from "./ProductsGrid"
import ProductList from "./ProductsList"
import { useLoaderData } from "react-router-dom";
import {BsFillGridFill,BsList} from 'react-icons/bs'
const ProductsContainer = () => {
  const {meta} = useLoaderData();
  const total = meta?.pagination?.total
  // console.log(total)
  const [layout,setLayout] = useState('grid');
  const setActiveState = (pattern)=>{
    return `text-xl btn btn-circle btn-sm ${pattern == layout?'btn-primary text-primary-content':'btn-ghost text-based-content'}`;
  }
  return (
    <>
      {/* HEADER */}
      <div className="flex justify-between items-center border-b border-base-300 mt-8 pb-5">
        <h4 className="font-medium text">{total} Product{total>1?'s':''}</h4>
        <div className="flex gap-2">
          <button className={setActiveState('grid')} onClick={()=>setLayout('grid')}>
            <BsFillGridFill />
          </button>
          <button className={setActiveState('list')} onClick={()=>setLayout('list')}>
            <BsList />
          </button>
        </div>
      </div>
      {total <=0 ?
      <h4>No match for your search</h4>:
      layout==='grid'?
        <ProductsGrid />:
        <ProductList />
      }
    </>
  )
}

export default ProductsContainer
