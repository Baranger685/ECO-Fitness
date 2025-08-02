import { Link } from 'react-router-dom'
import { Leaf, Activity, TrendingUp, Users, ArrowRight, Play } from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Sustainable Workouts',
      description: 'Environmentally conscious exercise routines that minimize your carbon footprint.',
    },
    {
      icon: Activity,
      title: 'Smart Tracking',
      description: 'Monitor your progress with detailed analytics and eco-friendly metrics.',
    },
    {
      icon: TrendingUp,
      title: 'Progress Analytics',
      description: 'Track your fitness journey with comprehensive data and insights.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with like-minded fitness enthusiasts and share your journey.',
    },
  ]

  const stats = [
    { label: 'Active Users', value: '10K+' },
    { label: 'Workouts Created', value: '500+' },
    { label: 'Carbon Saved', value: '2.5T' },
    { label: 'Countries', value: '25+' },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-eco-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Fitness
              <span className="text-primary-600"> Sustainably</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join the movement towards eco-friendly fitness. Track your workouts, 
              reduce your carbon footprint, and achieve your fitness goals while 
              protecting the planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/workouts"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Start Working Out</span>
              </Link>
              <Link
                to="/community"
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>Join Community</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ECO Fitness?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge fitness technology with environmental 
              consciousness to create a truly sustainable fitness experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="card text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Eco-Friendly Fitness Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already making a difference 
            with their sustainable fitness routines.
          </p>
          <Link
            to="/workouts"
            className="inline-flex items-center space-x-2 bg-white text-primary-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home 