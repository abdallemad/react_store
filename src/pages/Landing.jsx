
import {FeatureProducts} from '../components'
import { Hero } from "../components"
import customFetch from "../utils/custom"
export const loader = async()=>{
  const {data:res} = await customFetch('/products?featured=true');
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
