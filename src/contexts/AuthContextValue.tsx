import { createContext } from 'react'
import { AuthContextType } from './AuthContextType'

export const AuthContext = createContext<AuthContextType | undefined>(undefined) 