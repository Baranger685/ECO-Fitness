import React, { createContext, useContext, useReducer, ReactNode } from 'react'

export interface Workout {
  id: string
  name: string
  description: string
  duration: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  ecoScore: number
  exercises: Exercise[]
  category: 'cardio' | 'strength' | 'flexibility' | 'balance'
}

export interface Exercise {
  id: string
  name: string
  sets: number
  reps: number
  duration: number
  rest: number
  instructions: string
}

export interface WorkoutSession {
  id: string
  workoutId: string
  date: Date
  duration: number
  completed: boolean
  notes: string
}

interface WorkoutState {
  workouts: Workout[]
  sessions: WorkoutSession[]
  currentWorkout: Workout | null
}

type WorkoutAction =
  | { type: 'ADD_WORKOUT'; payload: Workout }
  | { type: 'ADD_SESSION'; payload: WorkoutSession }
  | { type: 'SET_CURRENT_WORKOUT'; payload: Workout | null }
  | { type: 'UPDATE_SESSION'; payload: WorkoutSession }

const initialState: WorkoutState = {
  workouts: [],
  sessions: [],
  currentWorkout: null,
}

const workoutReducer = (state: WorkoutState, action: WorkoutAction): WorkoutState => {
  switch (action.type) {
    case 'ADD_WORKOUT':
      return {
        ...state,
        workouts: [...state.workouts, action.payload],
      }
    case 'ADD_SESSION':
      return {
        ...state,
        sessions: [...state.sessions, action.payload],
      }
    case 'SET_CURRENT_WORKOUT':
      return {
        ...state,
        currentWorkout: action.payload,
      }
    case 'UPDATE_SESSION':
      return {
        ...state,
        sessions: state.sessions.map(session =>
          session.id === action.payload.id ? action.payload : session
        ),
      }
    default:
      return state
  }
}

interface WorkoutContextType {
  state: WorkoutState
  dispatch: React.Dispatch<WorkoutAction>
}

const WorkoutContext = createContext<WorkoutContextType | undefined>(undefined)

export const useWorkout = () => {
  const context = useContext(WorkoutContext)
  if (context === undefined) {
    throw new Error('useWorkout must be used within a WorkoutProvider')
  }
  return context
}

interface WorkoutProviderProps {
  children: ReactNode
}

export const WorkoutProvider: React.FC<WorkoutProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, initialState)

  return (
    <WorkoutContext.Provider value={{ state, dispatch }}>
      {children}
    </WorkoutContext.Provider>
  )
} 