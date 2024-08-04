import { Link } from "react-router-dom"

import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'

const carouselImages = [hero1, hero2, hero3, hero4];
const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center ">
      <div className="max-w-[600px]">
        <h1 className="text-4xl font-bold leading-none sm:text-6xl">We are changing the way people shop</h1>
        <p className="my-12 text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.</p>
        <button className="btn btn-primary uppercase ">
          <Link to={'/products'}>our products</Link>
        </button>
      </div>
      <div className=" hidden lg:carousel carousel-center bg-neutral rounded-box max-h-[28rem] space-x-4  p-4">
        {
          carouselImages.map((image,index)=>{
            return <div key={index} className='carousel-item'>
            <img
              src={image}
              className='rounded-box h-full w-80  object-cover'
            />
          </div>
          })
        }
      </div>
    </div>
  )
}

export default Hero
