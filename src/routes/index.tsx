import { Navigate, Route, Routes as RoutesSwitch } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Login from '../pages/Login'
import Home from '../pages/Home'

function Routes() {
  return (
    <RoutesSwitch>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<PrivateRoute element={<Home />} />} />

      <Route path="*" element={<Navigate to="/login" />} />
    </RoutesSwitch>
  )
}

export default Routes
