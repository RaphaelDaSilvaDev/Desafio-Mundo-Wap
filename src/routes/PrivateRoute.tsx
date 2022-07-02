import { Navigate } from 'react-router-dom'

interface PrivateRouteProps {
  element: JSX.Element
}

const PrivateRoute = ({ element }: PrivateRouteProps): JSX.Element => {
  const token: string | null = localStorage.getItem('token') || null

  return token ? element : <Navigate to="/login" />
}

export default PrivateRoute
