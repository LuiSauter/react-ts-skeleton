import React, { createContext, useEffect, useState } from 'react'
import { type TAuthContext } from '../models/AuthContext'

export const AuthContext = createContext<TAuthContext>({} as TAuthContext)

interface Props {
  children: React.ReactNode | JSX.Element | JSX.Element[]
}

export const AuthProvider = ({ children }: Props) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const checkAuthStatus = () => {
      const token = localStorage.getItem('token')
      setIsAuthenticated(!!token)
    }
    checkAuthStatus()
    return () => { }
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, loading, setLoading }}>
      {children}
    </AuthContext.Provider>
  )
}
