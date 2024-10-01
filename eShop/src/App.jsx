import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Root from './components/Root'
import Cart from './pages/Cart'
import Error from './pages/Error'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'

const routes = createBrowserRouter([
  {path:'/', element:<Root/>,
    errorElement:<Error/>,
    children:[
      {path:"/", element: <Home/>},
      {path:"/product/:id", element: <ProductDetails/> },
      {path:"/cart", element: <Cart/>}
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}

export default App
