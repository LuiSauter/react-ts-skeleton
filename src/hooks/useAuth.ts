import { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import { type TAuthContext } from '../interfaces/AuthContext'

const useAuth = (): TAuthContext => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } = useContext(AuthContext)
  return { isAuthenticated, setIsAuthenticated, loading, setLoading }
}

export default useAuth
