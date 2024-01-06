import { Link } from 'react-router-dom'
import Routes from './routes'
import { HREF_HOME, HREF_LANDING, HREF_LOGIN, HREF_REGISTER } from './utils/constants'

function App() {
  return (
    <>
      <header>
        React Template
        <br />
        <Link to={HREF_LOGIN}>Login</Link>
        <Link to={HREF_REGISTER}>Register</Link>
        <Link to={HREF_LANDING}>Inicio</Link>
        <Link to={HREF_HOME}>App</Link>
      </header>
      <main>
        <Routes />
      </main>
    </>
  )
}

export default App
