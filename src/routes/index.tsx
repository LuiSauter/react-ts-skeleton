import { Route, Routes as BaseRoutes } from 'react-router-dom'
import LoginPage from '../pages/auth/Login'
import ProtectedRoute from './protectedRoute'
import useAuth from '../hooks/useAuth'
import RegisterPage from '../pages/auth/Register'
import HomePage from '../pages/home/home'
import LandingPage from '../pages/landing'
import { HREF_HOME, HREF_LANDING, HREF_LOGIN, HREF_REGISTER } from '../utils/constants'

const Routes = () => {
  const { isAuthenticated } = useAuth()
  return (
    <BaseRoutes>
      {/* RUTAS PÚBLICAS */}
      <Route index element={<LandingPage />} />
      {/* RUTAS PÚBLICAS, PERO SI YA ESTÁ AUTENTICADO OCULTAR DICHAS RUTAS */}
      <Route element={<ProtectedRoute isAllowed={!isAuthenticated} redirectTo={HREF_HOME} />}>
        <Route path={HREF_LOGIN} element={<LoginPage />} />
        <Route path={HREF_REGISTER} element={<RegisterPage />} />
      </Route>
      {/* RUTAS PRIVADAS */}
      <Route element={<ProtectedRoute isAllowed={isAuthenticated} redirectTo={HREF_LANDING} />}>
        <Route path={HREF_HOME} element={<HomePage />} />
        <Route path={'/dashboard'} element={<h2>DashboardPage</h2>} />
        <Route path={'/task'} element={<h2>TaskPage</h2>} />
        <Route path={'/task/:id'} element={<h2>TaskPage id</h2>} />
      </Route>
    </BaseRoutes>
  )
}

export default Routes
