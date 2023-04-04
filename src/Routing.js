import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import Accueil from './Pages/Accueil'
import Register from './Pages/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/greeting',
    element: <Accueil />,
  },
])

export default router
