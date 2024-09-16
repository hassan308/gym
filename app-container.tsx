'use client'

import { useState } from 'react'
import Login from './login'
import Dashboard from './dashboard'

export default function AppContainer() {
  const [user, setUser] = useState<string | null>(null)

  const handleLogin = (username: string) => {
    setUser(username)
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <Dashboard username={user} onLogout={handleLogout} />
      )}
    </>
  )
}