import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes'
import { Toaster } from 'react-hot-toast'

const app = () => {
  return (
    <RouterProvider router={routes}></RouterProvider>
    
  )
}

export default app