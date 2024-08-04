import { Link } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
const Header = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(store=>store.user);
  return (
    <header className=" bg-neutral">
      <div className="align-element  flex justify-center sm:justify-end  py-1 ">
        <div className="flex justify-center items-center gap-4 ">
        <Link to={'/login'} className="link link-hover text-xs sm:text-base text-zinc-300">Sing in/Guest</Link>
        <Link to={'/register'} className="link link-hover text-xs sm:text-base text-zinc-300">Create Acount</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
