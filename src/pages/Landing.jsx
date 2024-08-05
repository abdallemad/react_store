
import {FeatureProducts} from '../components'
import { Hero } from "../components"
import customFetch from "../utils/custom"

const featuredProductQuery = {
  queryKey:['featuredProduct'],
  queryFn:()=> customFetch('/products?featured=true')
}

export const loader =(queryClient)=> async()=>{
  const {data:res} = await queryClient.ensureQueryData(featuredProductQuery);
  console.log(queryClient);
  console.log('hello world')
  const data = res.data
  return {data}
}
const Landing = () => {
  return (
    <>
      <Hero />
      <FeatureProducts />
    </>
  )
}

export default Landing
