import { Link } from 'react-router-dom'
import Routes from './routes'
import { PrivateRoutes, PublicRoutes } from './utils/constants'

function App() {
  return (
    <>
      <header>
        React Template
        <br />
        <Link to={PublicRoutes.LOGIN}>Login</Link>
        <Link to={PublicRoutes.REGISTER}>Register</Link>
        <Link to={PublicRoutes.LANDING}>Inicio</Link>
        <Link to={PrivateRoutes.HOME}>App</Link>
      </header>
      <main>
        <Routes />
      </main>
    </>
  )
}

export default App
