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
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 1000 * 60 * 5
    }
  }
})

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
        loader: landingLoader(queryClient)

      },
      {
        path:'products',
        element:<Products />,
        loader: productsLoader(queryClient)
      },
      {
        path:'products/:id',
        element:<SingleProducts />,
        loader: singleProductLoader(queryClient)
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
        action: orderAction(store,queryClient),
        loader: CheckoutLoader(store)
      },
      {
        path:'orders',
        element:<Orders />,
        loader: OrderLoader(store,queryClient),
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
    <QueryClientProvider client={queryClient} >
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
