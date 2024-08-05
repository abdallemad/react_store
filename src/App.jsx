import { 
  About,
  Cart,
  Checkout
  ,Error,
  HomeLayout,
  Landing,
  Orders,
  Products,
  Register,
  SingleProducts,Login
} from "./pages"
import { ErrorElement } from "./components";
import { createBrowserRouter,RouterProvider } from "react-router-dom"
// actions...
import {action as LoginAction } from './pages/Login';
import {action as registerAction } from './pages/Register';
import {action as orderAction} from './components/CheckoutForm';
// loaders...
import {loader as landingLoader} from './pages/Landing'
import {loader as singleProductLoader} from './pages/SingleProduct';
import {loader as productsLoader} from './pages/Products'
import {loader as CheckoutLoader} from './pages/Checkout'
import {loader as OrderLoader} from './pages/Orders';
import store from './features/store'

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout />,
    errorElement:<Error />,
    children:[
      {
        index:true,
        element:<Landing />,
        errorElement:<ErrorElement />,
        loader: landingLoader

      },
      {
        path:'products',
        element:<Products />,
        loader: productsLoader
      },
      {
        path:'products/:id',
        element:<SingleProducts />,
        loader: singleProductLoader
      },
      {
        path:'cart',
        element:<Cart />
      },
      {
        path:'about',
        element:<About />
      },
      {
        path:'checkout',
        element:<Checkout />,
        action: orderAction(store),
        loader: CheckoutLoader(store)
      },
      {
        path:'orders',
        element:<Orders />,
        loader: OrderLoader(store),
      },

    ]
  },
  {
    path:'/login',
    element:<Login />,
    errorElement:<Error />,
    action: LoginAction(store)
  },
  {
    path:'/register',
    errorElement:<Error />,
    element:<Register />,
    action: registerAction
  }
])


const App = () => {
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
