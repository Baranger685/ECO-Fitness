import { useState } from 'react'
import { Users, MessageCircle, Heart, Share2, Leaf, Trophy, Target } from 'lucide-react'

const Community = () => {
  const [selectedTab, setSelectedTab] = useState('feed')

  const communityMembers = [
    {
      id: '1',
      name: 'Sarah Green',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      level: 'Eco Warrior',
      ecoScore: 98,
      workoutsCompleted: 156,
      carbonSaved: '2.3T',
      recentActivity: 'Just completed "Green Cardio Circuit"',
      timeAgo: '2 hours ago',
    },
    {
      id: '2',
      name: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      level: 'Fitness Enthusiast',
      ecoScore: 92,
      workoutsCompleted: 89,
      carbonSaved: '1.8T',
      recentActivity: 'Shared a new outdoor workout routine',
      timeAgo: '4 hours ago',
    },
    {
      id: '3',
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      level: 'Yoga Master',
      ecoScore: 100,
      workoutsCompleted: 203,
      carbonSaved: '3.1T',
      recentActivity: 'Achieved 100% eco score for the month!',
      timeAgo: '1 day ago',
    },
  ]

  const challenges = [
    {
      id: '1',
      title: '30-Day Eco Challenge',
      description: 'Complete 30 sustainable workouts in 30 days',
      participants: 1247,
      daysLeft: 12,
      progress: 75,
      category: 'fitness',
    },
    {
      id: '2',
      title: 'Zero Equipment Month',
      description: 'Use only bodyweight exercises for an entire month',
      participants: 892,
      daysLeft: 8,
      progress: 60,
      category: 'strength',
    },
    {
      id: '3',
      title: 'Outdoor Fitness Challenge',
      description: 'Complete all workouts outdoors for 2 weeks',
      participants: 567,
      daysLeft: 5,
      progress: 40,
      category: 'cardio',
    },
  ]

  const posts = [
    {
      id: '1',
      author: 'Sarah Green',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      content: 'Just discovered an amazing outdoor workout spot! Perfect for eco-friendly fitness. 🌿💪',
      likes: 24,
      comments: 8,
      timeAgo: '2 hours ago',
      ecoScore: 95,
    },
    {
      id: '2',
      author: 'Mike Johnson',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      content: 'Completed my 100th sustainable workout today! The journey to eco-friendly fitness has been incredible. 🎉',
      likes: 42,
      comments: 15,
      timeAgo: '5 hours ago',
      ecoScore: 92,
    },
    {
      id: '3',
      author: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      content: 'Morning yoga in the park - nothing beats connecting with nature while staying fit! 🌅🧘‍♀️',
      likes: 31,
      comments: 12,
      timeAgo: '1 day ago',
      ecoScore: 100,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Community</h1>
          <p className="text-gray-600">Connect with like-minded fitness enthusiasts and share your eco-friendly journey.</p>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-1 mb-8">
          <div className="flex space-x-1">
            {[
              { id: 'feed', label: 'Community Feed', icon: Users },
              { id: 'challenges', label: 'Challenges', icon: Trophy },
              { id: 'members', label: 'Top Members', icon: Target },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
                    selectedTab === tab.id
                      ? 'bg-primary-100 text-primary-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Content based on selected tab */}
        {selectedTab === 'feed' && (
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="card">
                <div className="flex items-start space-x-3 mb-4">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-gray-900">{post.author}</span>
                      <div className="flex items-center space-x-1 bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs">
                        <Leaf className="w-3 h-3" />
                        <span>{post.ecoScore}%</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{post.timeAgo}</p>
                  </div>
                </div>
                
                <p className="text-gray-900 mb-4">{post.content}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-500 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">{post.comments}</span>
                    </button>
                  </div>
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-green-500 transition-colors">
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm">Share</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'challenges' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="card">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{challenge.title}</h3>
                  <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                    {challenge.category}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{challenge.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{challenge.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-500 h-2 rounded-full"
                      style={{ width: `${challenge.progress}%` }}
                    ></div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{challenge.participants} participants</span>
                    <span>{challenge.daysLeft} days left</span>
                  </div>
                </div>
                
                <button className="w-full btn-primary mt-4">
                  Join Challenge
                </button>
              </div>
            ))}
          </div>
        )}

        {selectedTab === 'members' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communityMembers.map((member) => (
              <div key={member.id} className="card text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <div className="flex items-center justify-center space-x-1 bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium mb-3">
                  <Leaf className="w-3 h-3" />
                  <span>{member.level}</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Eco Score</span>
                    <span className="font-medium">{member.ecoScore}%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Workouts</span>
                    <span className="font-medium">{member.workoutsCompleted}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Carbon Saved</span>
                    <span className="font-medium">{member.carbonSaved}</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500 mb-3">
                  {member.recentActivity}
                </div>
                
                <button className="btn-secondary w-full">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Community 