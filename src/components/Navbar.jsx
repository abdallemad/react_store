import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs';
import { FaBarsStaggered } from 'react-icons/fa6';
import {Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import {NavLinks } from '../components'
import { toggleTheme } from '../features/user/userSlice';

const Navbar = () => {
  const {numItemsInCart} = useSelector(store=>store.cart);
  const {user} = useSelector(store=>store.user);
  const dispatch = useDispatch();
  
  const handelTheme = ()=>{
    dispatch(toggleTheme());
  };
  return (
    <nav className='bg-base-300'>
      <div className="navbar  align-element">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className='w-6 h-6' />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-200 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
            <NavLinks />
            </ul>
          </div>
          <Link to={'/'} className="btn btn-primary text-xl hidden lg:flex">C</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* THEME SETUP */}
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handelTheme}/>
            {/* sun icon */}
            <BsSunFill className="swap-on h-6 w-6 fill-current"/>
            {/* moon icon */}
            <BsMoonFill className="swap-off h-6 w-6 fill-current"/>
          </label>
          <Link to={'/cart'} className='btn btn-ghost btn-circle  relative ml-3'>
          <span className="absolute bg-primary -top-2 -right-2 grid place-items-center text-lg px-2 text- text-white rounded-full">
              {+numItemsInCart}
          </span>
            <BsCart3 className='w-6 h-6' />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
