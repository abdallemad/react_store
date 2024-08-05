import { Link, useNavigate } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useQueryClient } from "@tanstack/react-query";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const handelLogout = ()=>{
    dispatch(logoutUser());
    navigate('/')
    dispatch(clearCart());
    queryClient.removeQueries()
  }
  const {user} = useSelector(store=>store.user);
  return (
    <header className=" bg-neutral">
      <div className="align-element  flex justify-center sm:justify-end  py-1 ">
        {user?
        <div className="flex justify-center items-center gap-x-2 sm:gap-x-8">
          <p className="text-xs sm:text-sm">Hello, {user.username}</p>
          <button className="btn btn-primary btn-xs btn-outline uppercase" onClick={handelLogout}>Logout</button>
        </div>
        :
        <div className="flex justify-center items-center gap-4 ">
        <Link to={'/login'} className="link link-hover text-xs sm:text-sm text-zinc-300">Sing in/Guest</Link>
        <Link to={'/register'} className="link link-hover text-xs sm:text-sm text-zinc-300">Create Acount</Link>
        </div>
        }
        
      </div>
    </header>
  )
}

export default Header
