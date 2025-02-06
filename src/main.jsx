import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import HomePage from './pages/home/HomePage.jsx'
import SignupPage from './pages/SignUpPage/SignupPage.jsx'
import LogInPage from './pages/LoginPage/LogInPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", /* default Child of app */
        element: <HomePage/>
      },
      {
        path:"/login",
        element:<LogInPage/>
      },
      {
        path:"/signUp",
        element:<SignupPage/>
      },
      
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
