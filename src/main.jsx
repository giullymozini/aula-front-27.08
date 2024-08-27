import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import GlobalStyle from './css/GlobalStyle.jsx'

const router = createBrowserRouter([{
  path: '/', element: <App />,
  errorElement: <Error />,
  
  children: [
    { path: '/', element: <Home /> }
  ]
}])
















createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle/>
  </StrictMode>,
)
