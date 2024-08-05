import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/custom";
import { OrderList, PaginationContainer, SectionTitle } from "../components";

export const loader =(store)=>
  async ({request})=>{
    const {url} = request;
    const params = Object.fromEntries([...new URL(url).searchParams.entries()])
    const user = store.getState().user.user;
    if(!user){
      toast.warn('you must login to view the orders');
      return redirect('/login');
    }
    try {
      const response = await customFetch.get('/orders',{
        params:params,
        headers:{
          Authorization:`Bearer ${user.token}`
        }
      })
      const {data} = response
      console.log(response)
      return {orders:data.data,meta:data.meta};
    } catch (error) {
      const errorMassage = error?.response?.data?.error?.massage || 'please check your cradintion';
      toast.error(errorMassage);
      if(error.response.status === (401 || 403)) return redirect('/login')
      return null
    }
}
const Orders = () => {
  const {meta} = useLoaderData();
  const total = meta?.pagination?.total
  if(total < 1) return <SectionTitle text={'no order in place'} />
  return (
    <>
      <SectionTitle text={'your orders'} /> 
      <OrderList />
      {/* <PaginationContainer /> */}
    </>
  )
}

export default Orders
