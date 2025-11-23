import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
  requireStudent?: boolean;
}

export default function ProtectedRoute({ 
  children, 
  requireAdmin = false,
  requireStudent = false 
}: ProtectedRouteProps) {
  const { isAuthenticated, isAdmin, isStudent, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1a1851] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requireAdmin && !isAdmin) {
    return <Navigate to="/student/dashboard" replace />;
  }

  if (requireStudent && !isStudent) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <>{children}</>;
}
