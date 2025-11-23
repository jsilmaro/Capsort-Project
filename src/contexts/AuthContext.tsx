import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService, User } from '../services/authService';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isStudent: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  adminLogin: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (data: any) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = authService.getStoredUser();
    if (storedUser && authService.isAuthenticated()) {
      setUser(storedUser);
      authService.getCurrentUser().then((result) => {
        if (result.success && result.user) {
          setUser(result.user);
        }
      });
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const result = await authService.login({ email, password });
    if (result.success && result.user) {
      setUser(result.user);
      return { success: true };
    }
    return { success: false, error: result.error || result.message };
  };

  const adminLogin = async (email: string, password: string) => {
    const result = await authService.adminLogin({ email, password });
    if (result.success && result.user) {
      setUser(result.user);
      return { success: true };
    }
    return { success: false, error: result.error || result.message };
  };

  const register = async (data: any) => {
    const result = await authService.register(data);
    if (result.success) {
      return { success: true };
    }
    return { success: false, error: result.error || result.message };
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const refreshUser = async () => {
    const result = await authService.getCurrentUser();
    if (result.success && result.user) {
      setUser(result.user);
    }
  };

  const value = {
    user,
    isAuthenticated: !!user,
    isAdmin: user?.role === 'admin',
    isStudent: user?.role === 'student',
    loading,
    login,
    adminLogin,
    register,
    logout,
    refreshUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
