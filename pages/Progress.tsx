import { useState } from 'react'
import { TrendingUp, Calendar, Target, Leaf, Activity, Clock } from 'lucide-react'

const Progress = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week')

  const stats = [
    {
      title: 'Total Workouts',
      value: '24',
      change: '+12%',
      changeType: 'positive' as const,
      icon: Activity,
    },
    {
      title: 'Total Time',
      value: '18.5h',
      change: '+8%',
      changeType: 'positive' as const,
      icon: Clock,
    },
    {
      title: 'Eco Score',
      value: '92%',
      change: '+5%',
      changeType: 'positive' as const,
      icon: Leaf,
    },
    {
      title: 'Goals Met',
      value: '8/10',
      change: '+2',
      changeType: 'positive' as const,
      icon: Target,
    },
  ]

  const recentWorkouts = [
    {
      id: '1',
      name: 'Green Cardio Circuit',
      date: '2024-01-15',
      duration: 30,
      ecoScore: 95,
      completed: true,
    },
    {
      id: '2',
      name: 'Eco Strength Training',
      date: '2024-01-14',
      duration: 45,
      ecoScore: 90,
      completed: true,
    },
    {
      id: '3',
      name: 'Nature Yoga Flow',
      date: '2024-01-13',
      duration: 40,
      ecoScore: 100,
      completed: true,
    },
    {
      id: '4',
      name: 'Outdoor Running',
      date: '2024-01-12',
      duration: 25,
      ecoScore: 98,
      completed: false,
    },
  ]

  const goals = [
    {
      id: '1',
      title: 'Complete 30 workouts this month',
      progress: 24,
      target: 30,
      category: 'workouts',
    },
    {
      id: '2',
      title: 'Maintain 90%+ eco score',
      progress: 92,
      target: 90,
      category: 'eco-score',
    },
    {
      id: '3',
      title: 'Workout 5 days per week',
      progress: 4,
      target: 5,
      category: 'frequency',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Progress</h1>
          <p className="text-gray-600">Track your fitness journey and environmental impact.</p>
        </div>

        {/* Period Selector */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-8">
          <div className="flex items-center space-x-4">
            <Calendar className="w-5 h-5 text-gray-500" />
            <span className="font-medium text-gray-900">Time Period:</span>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="card">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <span className={`text-sm font-medium ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.title}</div>
              </div>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Workouts */}
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Workouts</h3>
            <div className="space-y-4">
              {recentWorkouts.map((workout) => (
                <div key={workout.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="font-medium text-gray-900">{workout.name}</h4>
                      {workout.completed && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          Completed
                        </span>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{workout.date}</span>
                      <span>{workout.duration} min</span>
                      <div className="flex items-center space-x-1">
                        <Leaf className="w-3 h-3" />
                        <span>{workout.ecoScore}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Goals</h3>
            <div className="space-y-4">
              {goals.map((goal) => {
                const progressPercentage = (goal.progress / goal.target) * 100
                return (
                  <div key={goal.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-900">{goal.title}</span>
                      <span className="text-sm text-gray-600">
                        {goal.progress}/{goal.target}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          progressPercentage >= 100 ? 'bg-green-500' : 'bg-primary-500'
                        }`}
                        style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="card mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Progress Over Time</h3>
          <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500">Chart visualization coming soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Progress 