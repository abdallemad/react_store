import { PaginationContainer,ProductsContainer,Filters } from "../components"
import customFetch from "../utils/custom"

export const loader = async({request})=>{
  const search = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  const page = search['page'];

  const response =await customFetch.get(`/products`,{
    params:search
  });
  const {data, meta} = response.data
  return {data,meta,params:search}
}

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer/>
      <PaginationContainer />
    </>
  )
}

export default Products
