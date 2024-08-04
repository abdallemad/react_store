import { useLoaderData,Link,Form} from "react-router-dom"
import {FormSelect} from '../components'
import FormInput from "./FormInput";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";
const Filters = () => {
  const {meta,params} = useLoaderData();
  const {categories,companies} = meta
  return (
    <Form 
    className="bg-base-300 rounded-sm px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/*  SEARCHES */}
      <FormInput 
        type={'search'} 
        label={'search'} 
        name={'search'} 
        size={'input-sm'}
        defaultValue={params.search}
        />
      {/* CATEGORY */}
      <FormSelect 
        id={'category'} 
        label={'Select Category'} 
        name={'category'} 
        options={categories}
        defaultValue={params.category}
        />
      {/* COMPANY */}
      <FormSelect id={'companies'} 
        label={'Select Companies'} 
        name={'company'} 
        options={companies}
        defaultValue={params.company}
        />
      {/* ORDERED */}
      <FormSelect 
        id={'order'} 
        label={'store by'} 
        name={'order'} 
        options={['a-z','z-a','lower','high']}
        defaultValue={params.order}
        />
      {/* PRICE */}
      <FormRange 
        name={'price'}
        label={'select price'}
        size={'range-sm'}
        price={+params.price}
      />
      {/* SHIPPING */}
      <FormCheckbox
        name={'shipping'}
        label={'free shipping'}
        size={'checkbox-sm'}
        defalutValue={params.shipping}
      />
      {/*  BUTTONS */}
      <button type="submit" className="btn btn-primary btn-sm uppercase tracking-wider">search</button>
      <Link to={'/products'} className="btn btn-accent btn-sm uppercase tracking-wider">reset</Link>
    </Form>
  )
}

export default Filters
