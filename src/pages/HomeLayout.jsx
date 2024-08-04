import { Outlet, useNavigation } from "react-router-dom";
import {Header,Navbar} from '../components';
import Loading from "./Loading";
const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <>
    <Header />
    <Navbar />
      <section className="align-element py-20">
        {
          isLoading?
            <Loading />:
            <Outlet />
        }
      </section>
    </>
  )
}

export default HomeLayout
