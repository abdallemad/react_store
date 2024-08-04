import {SectionTitle} from './index'
import { ProductGrid } from './index'
const FeatureProducts = () => {
  return (
    <div className='pt-24'>
      <SectionTitle text={'featured products'} />
      <ProductGrid />
    </div>
  )
}

export default FeatureProducts
