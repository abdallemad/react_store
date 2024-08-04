import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
const links = [
  { id: 1, url: '/', text: 'home' },
  { id: 2, url: 'about', text: 'about' },
  { id: 3, url: 'products', text: 'products' },
  { id: 4, url: 'cart', text: 'cart' },
  { id: 5, url: 'checkout', text: 'checkout' },
  { id: 6, url: 'orders', text: 'orders' },
];
const NavLinks = () => {
  const {user} = useSelector(store=>store.user);
  return (
    <>
      {links.map(item=>{
        if((item.url=='checkout' || item.url =='orders') && !user) return null
        return  <li key={item.id}><NavLink to={item.url} className={'capitalize py-2'}>{item.text}</NavLink></li>
      })}
    </>
  )
}

export default NavLinks
