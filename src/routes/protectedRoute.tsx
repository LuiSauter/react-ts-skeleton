import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = ({ isAllowed, redirectTo = '/landing', children }: ProtectedRoute) => {
  if (!isAllowed) {
    return <Navigate to={redirectTo} replace />
  }
  return children ?? <Outlet />
}

export default ProtectedRoute
