import { useContext } from 'react';
import { AuthContext, AuthContextType } from '../contexts/AuthContext';

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { useAuth }; 
