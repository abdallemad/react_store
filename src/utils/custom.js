import axios from 'axios';

const productionUrl = 'https://strapi-store-server.onrender.com/api';

export const customFetch = axios.create({
  baseURL:productionUrl
})

export const formatPrice = (price)=>{
  const dolarPrice = new Intl.NumberFormat('en-US',{
    style:'currency',
    currency:'USD'
  }).format((price/100).toFixed(2));
  return dolarPrice;
}
export const generateAmount = (number)=>{
  return Array.from({length:number},(_,index)=>{
    return index +1;
  })
}
export default customFetch
