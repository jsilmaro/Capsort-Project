// Authentication Service
import { api } from './api';

export interface User {
  id: number;
  fullName: string;
  contactNumber: string;
  email: string;
  role: 'admin' | 'student';
  createdAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  fullName: string;
  contactNumber: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: User;
  status: number;
}

export interface RegisterResponse {
  message: string;
  user: User;
  status: number;
}

class AuthService {
  async register(data: RegisterData) {
    const response = await api.post<RegisterResponse>('/auth/register', data);
    
    if (response.data) {
      return { success: true, user: response.data.user };
    }
    
    return { success: false, error: response.error, message: response.message };
  }

  async login(credentials: LoginCredentials) {
    const response = await api.post<AuthResponse>('/auth/login', credentials);
    
    if (response.data) {
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      return { success: true, user: response.data.user, token: response.data.token };
    }
    
    return { success: false, error: response.error, message: response.message };
  }

  async adminLogin(credentials: LoginCredentials) {
    const response = await api.post<AuthResponse>('/auth/admin/login', credentials);
    
    if (response.data) {
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      return { success: true, user: response.data.user, token: response.data.token };
    }
    
    return { success: false, error: response.error, message: response.message };
  }

  async getCurrentUser() {
    const response = await api.get<{ user: User }>('/auth/me');
    
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data.user));
      return { success: true, user: response.data.user };
    }
    
    return { success: false, error: response.error };
  }

  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  }

  getStoredUser(): User | null {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch {
        return null;
      }
    }
    return null;
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  isAdmin(): boolean {
    const user = this.getStoredUser();
    return user?.role === 'admin';
  }

  isStudent(): boolean {
    const user = this.getStoredUser();
    return user?.role === 'student';
  }
}

export const authService = new AuthService();
