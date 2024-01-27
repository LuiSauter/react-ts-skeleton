import { Route, Routes as BaseRoutes } from 'react-router-dom'
import LoginPage from '../pages/login'
import ProtectedRoute from './protectedRoute'
import useAuth from '../hooks/useAuth'
import RegisterPage from '../pages/register'
import HomePage from '../pages/home'
import LandingPage from '../pages/landing'
import { PublicRoutes, PrivateRoutes } from '../utils/constants'

const Routes = () => {
  const { isAuthenticated } = useAuth()
  return (
    <BaseRoutes>
      {/* RUTAS PÚBLICAS */}
      <Route index element={<LandingPage />} />
      {/* RUTAS PÚBLICAS, PERO SI YA ESTÁ AUTENTICADO OCULTAR DICHAS RUTAS */}
      <Route element={<ProtectedRoute isAllowed={!isAuthenticated} redirectTo={PrivateRoutes.HOME} />}>
        <Route path={PublicRoutes.LOGIN} element={<LoginPage />} />
        <Route path={PublicRoutes.REGISTER} element={<RegisterPage />} />
      </Route>
      {/* RUTAS PRIVADAS */}
      <Route element={<ProtectedRoute isAllowed={isAuthenticated} redirectTo={PublicRoutes.LANDING} />}>
        <Route path={PrivateRoutes.HOME} element={<HomePage />} />
        <Route path={PrivateRoutes.DASHBOARD} element={<h2>DashboardPage</h2>} />
        <Route path={PrivateRoutes.TASK} element={<h2>TaskPage</h2>} />
        <Route path={PrivateRoutes.TASK_ID} element={<h2>TaskPage id</h2>} />
      </Route>
      <Route path="*" element={<h2>Not found</h2>} />
    </BaseRoutes>
  )
}

export default Routes
