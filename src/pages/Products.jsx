import { PaginationContainer,ProductsContainer,Filters } from "../components"
import customFetch from "../utils/custom"

const productsQuery = (params) =>{
  const {search,company,category,shipping,price,sort,page} = params
  return {
    queryKey:['products',search ?? '',company ?? 'all',category ?? 'all',sort??"a-z",price??100000,shipping??false,page?? 1],
    queryFn:()=> customFetch.get(`/products`,{
      params:params
    })
  }
}


export const loader =(queryClient)=> async({request})=>{
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  const response =await queryClient.ensureQueryData(productsQuery(params))
  const {data, meta} = response.data
  return {data,meta,params:params}
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
