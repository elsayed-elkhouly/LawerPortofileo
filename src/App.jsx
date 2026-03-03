import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './componts/home/Home'
import Layout from './componts/Layout/Layout'
import Service from './componts/OurService/Service'
import BookDate from './componts/bookdate/BookDate'
import { Toaster } from 'react-hot-toast'

function App() {
  const router = createBrowserRouter([{
    path: "", element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "/service", element: <Service /> },
      { path: "/BookingDate", element: <BookDate /> },


    ]
  }])
  return (
    <>
    <Toaster/>
      <RouterProvider router={router} />

    </>
  )
}

export default App
