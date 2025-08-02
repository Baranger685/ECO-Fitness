import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Workouts from './pages/Workouts'
import Progress from './pages/Progress'
import Community from './pages/Community'
import { WorkoutProvider } from './context/WorkoutContext'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <WorkoutProvider>
      <Router>
        <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
          <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/workouts" element={<Workouts />} />
              <Route path="/progress" element={<Progress />} />
              <Route path="/community" element={<Community />} />
            </Routes>
          </main>
        </div>
      </Router>
    </WorkoutProvider>
  )
}

export default App 