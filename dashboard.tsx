'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  BarChart, 
  DumbbellIcon, 
  HomeIcon, 
  ListIcon, 
  LogOutIcon, 
  PlusIcon, 
  UserIcon,
  TrendingUpIcon,
  CalendarIcon,
  AwardIcon
} from 'lucide-react'

interface DashboardProps {
  username: string
  onLogout: () => void
}

export default function Dashboard({ username, onLogout }: DashboardProps) {
  const [activeMenuItem, setActiveMenuItem] = useState('home')

  const menuItems = [
    { icon: HomeIcon, label: 'Hem', id: 'home' },
    { icon: ListIcon, label: 'Övningar', id: 'exercises' },
    { icon: BarChart, label: 'Statistik', id: 'stats' },
    { icon: UserIcon, label: 'Profil', id: 'profile' },
  ]

  const exercises = [
    { name: 'Bänkpress', muscle: 'Bröst', sets: 3, reps: 10, progress: 80 },
    { name: 'Knäböj', muscle: 'Ben', sets: 4, reps: 8, progress: 65 },
    { name: 'Marklyft', muscle: 'Rygg', sets: 3, reps: 5, progress: 90 },
    { name: 'Axelpress', muscle: 'Axlar', sets: 3, reps: 12, progress: 70 },
  ]

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-64 bg-white shadow-xl"
      >
        <div className="p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-purple-600 flex items-center">
            <DumbbellIcon className="mr-2" /> GymFlex
          </h2>
          <Button 
            variant="ghost" 
            onClick={onLogout} 
            className="md:hidden text-gray-600 hover:text-gray-900"
          >
            <LogOutIcon className="h-5 w-5" />
          </Button>
        </div>
        <nav className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`flex items-center px-4 md:px-6 py-3 md:py-4 text-left transition-colors duration-200 ${
                activeMenuItem === item.id ? 'bg-purple-100 text-purple-600' : 'text-gray-600 hover:bg-gray-100'
              } ${activeMenuItem === item.id ? 'border-b-2 md:border-b-0 md:border-l-2 border-purple-600' : ''}`}
              onClick={() => setActiveMenuItem(item.id)}
            >
              <item.icon className="mr-2 md:mr-3 h-5 w-5" />
              <span className="md:inline">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="hidden md:block absolute bottom-4 left-4">
          <Button variant="ghost" onClick={onLogout} className="text-gray-600 hover:text-gray-900">
            <LogOutIcon className="mr-2 h-4 w-4" /> Logga ut
          </Button>
        </div>
      </motion.aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Välkommen tillbaka, {username}!</h1>
          
          {/* Progress overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 md:p-6 rounded-xl shadow-md"
            >
              <h3 className="text-base md:text-lg font-semibold mb-2 flex items-center">
                <CalendarIcon className="mr-2 text-purple-500" /> Veckans träningar
              </h3>
              <Progress value={60} className="h-2 mb-2" />
              <p className="text-xs md:text-sm text-gray-600">3 av 5 genomförda</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 md:p-6 rounded-xl shadow-md"
            >
              <h3 className="text-base md:text-lg font-semibold mb-2 flex items-center">
                <AwardIcon className="mr-2 text-purple-500" /> Månadens mål
              </h3>
              <Progress value={75} className="h-2 mb-2" />
              <p className="text-xs md:text-sm text-gray-600">15 av 20 träningar</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 md:p-6 rounded-xl shadow-md"
            >
              <h3 className="text-base md:text-lg font-semibold mb-2 flex items-center">
                <TrendingUpIcon className="mr-2 text-purple-500" /> Total lyftvikt
              </h3>
              <p className="text-3xl font-bold text-purple-600">2,450 kg</p>
              <p className="text-xs md:text-sm text-gray-600">Denna månad</p>
            </motion.div>
          </div>

          {/* Popular exercises */}
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Dina övningar</h2>
          <ScrollArea className="h-72 w-full rounded-xl border">
            <div className="p-4 space-y-4">
              {exercises.map((exercise, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{exercise.name}</h3>
                      <p className="text-sm text-gray-600">{exercise.muscle}</p>
                    </div>
                    <div className="text-sm text-gray-600">
                      {exercise.sets} set x {exercise.reps} reps
                    </div>
                  </div>
                  <Progress value={exercise.progress} className="h-2 mt-2" />
                </motion.div>
              ))}
            </div>
          </ScrollArea>

          {/* Today's workout */}
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Dagens träning</h2>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <Button className="mb-4 bg-purple-600 hover:bg-purple-700">
              <PlusIcon className="mr-2 h-4 w-4" /> Lägg till övning
            </Button>
            <p className="text-gray-600">Planera din träning för idag och börja logga dina framsteg!</p>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}