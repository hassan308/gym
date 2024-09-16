'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DumbbellIcon, UserIcon, LockIcon } from 'lucide-react'

interface LoginProps {
  onLogin: (username: string) => void
}

export default function Login({ onLogin }: LoginProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.trim()) {
      onLogin(username)
    }
  }

  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="p-8">
          <div className="text-center mb-8">
            <DumbbellIcon className="h-12 w-12 text-purple-600 mx-auto mb-2" />
            <h1 className="text-3xl font-bold text-gray-800">GymFlex</h1>
            <p className="text-gray-600">Din personliga träningspartner</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-gray-700">Användarnamn</Label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  id="username" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500" 
                  placeholder="Ditt användarnamn"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">Lösenord</Label>
              <div className="relative">
                <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-purple-500 focus:ring-purple-500" 
                  required
                />
              </div>
            </div>
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              Logga in
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  )
}