import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/custom";
import { OrderList, ComplexPagination, SectionTitle } from "../components";

const orderQuery = (params,user)=>{
  return {
    queryFn: ()=> customFetch.get('/orders',{
      params:params,
      headers:{
        Authorization:`Bearer ${user.token}`
      }
    }),
    queryKey:['orders',params.page?parseInt(params.page) : 1]
  }
}

export const loader =(store,queryClient)=>
  async ({request})=>{
    console.log(queryClient)
    const {url} = request;
    const params = Object.fromEntries([...new URL(url).searchParams.entries()])
    
    const user = store.getState().user.user;

    if(!user){
      toast.warn('you must login to view the orders');
      return redirect('/login');
    }

    try {
      const response = await queryClient.ensureQueryData(orderQuery(params,user))
      const {data} = response
      // console.log(response)
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
      <ComplexPagination />
    </>
  )
}

export default Orders
