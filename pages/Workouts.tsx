import { useState } from 'react'
import { Play, Clock, Target, Leaf, Filter } from 'lucide-react'
import { useWorkout } from '../context/WorkoutContext'

const Workouts = () => {
  const { state, dispatch } = useWorkout()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')

  const sampleWorkouts = [
    {
      id: '1',
      name: 'Green Cardio Circuit',
      description: 'High-intensity cardio workout using minimal equipment and outdoor spaces.',
      duration: 30,
      difficulty: 'intermediate' as const,
      ecoScore: 95,
      category: 'cardio' as const,
      exercises: [
        { id: '1', name: 'Jumping Jacks', sets: 3, reps: 20, duration: 0, rest: 30, instructions: 'Perform jumping jacks for 20 reps' },
        { id: '2', name: 'Mountain Climbers', sets: 3, reps: 15, duration: 0, rest: 30, instructions: 'Perform mountain climbers for 15 reps each side' },
        { id: '3', name: 'Burpees', sets: 3, reps: 10, duration: 0, rest: 45, instructions: 'Perform burpees for 10 reps' },
      ]
    },
    {
      id: '2',
      name: 'Eco Strength Training',
      description: 'Bodyweight strength training that builds muscle without gym equipment.',
      duration: 45,
      difficulty: 'advanced' as const,
      ecoScore: 90,
      category: 'strength' as const,
      exercises: [
        { id: '1', name: 'Push-ups', sets: 4, reps: 15, duration: 0, rest: 60, instructions: 'Perform push-ups with proper form' },
        { id: '2', name: 'Squats', sets: 4, reps: 20, duration: 0, rest: 60, instructions: 'Perform bodyweight squats' },
        { id: '3', name: 'Plank', sets: 3, reps: 1, duration: 60, rest: 45, instructions: 'Hold plank position for 60 seconds' },
      ]
    },
    {
      id: '3',
      name: 'Nature Yoga Flow',
      description: 'Mindful yoga practice that connects you with nature and promotes flexibility.',
      duration: 40,
      difficulty: 'beginner' as const,
      ecoScore: 100,
      category: 'flexibility' as const,
      exercises: [
        { id: '1', name: 'Sun Salutation', sets: 3, reps: 1, duration: 0, rest: 30, instructions: 'Complete one round of sun salutation' },
        { id: '2', name: 'Tree Pose', sets: 2, reps: 1, duration: 30, rest: 30, instructions: 'Hold tree pose for 30 seconds each side' },
        { id: '3', name: 'Warrior Sequence', sets: 2, reps: 1, duration: 0, rest: 45, instructions: 'Complete warrior I, II, and III sequence' },
      ]
    },
  ]

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'cardio', name: 'Cardio' },
    { id: 'strength', name: 'Strength' },
    { id: 'flexibility', name: 'Flexibility' },
    { id: 'balance', name: 'Balance' },
  ]

  const difficulties = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
  ]

  const filteredWorkouts = sampleWorkouts.filter(workout => {
    const categoryMatch = selectedCategory === 'all' || workout.category === selectedCategory
    const difficultyMatch = selectedDifficulty === 'all' || workout.difficulty === selectedDifficulty
    return categoryMatch && difficultyMatch
  })

  const startWorkout = (workout: typeof sampleWorkouts[0]) => {
    dispatch({ type: 'SET_CURRENT_WORKOUT', payload: workout })
    // In a real app, you'd navigate to a workout session page
    console.log('Starting workout:', workout.name)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Workouts</h1>
          <p className="text-gray-600">Discover sustainable workouts that are good for you and the planet.</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center space-x-4 mb-4">
            <Filter className="w-5 h-5 text-gray-500" />
            <h3 className="font-semibold text-gray-900">Filters</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty.id} value={difficulty.id}>{difficulty.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Workouts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkouts.map((workout) => (
            <div key={workout.id} className="card hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{workout.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{workout.description}</p>
                </div>
                <div className="flex items-center space-x-1 bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                  <Leaf className="w-3 h-3" />
                  <span>{workout.ecoScore}%</span>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{workout.duration} min</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Target className="w-4 h-4" />
                  <span className="capitalize">{workout.difficulty}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 capitalize bg-gray-100 px-2 py-1 rounded">
                  {workout.category}
                </span>
                <button
                  onClick={() => startWorkout(workout)}
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Play className="w-4 h-4" />
                  <span>Start</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredWorkouts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No workouts match your current filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Workouts 