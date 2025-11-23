import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Auth Pages
import Login from './pages/Login';
import Signup from './pages/Signup';

// Guest Pages
import Splash from './pages/guest/Splash';
import GuestProjects from './pages/guest/Projects';
import GuestAbout from './pages/guest/About';

// Student Pages
import StudentDashboard from './pages/student/Dashboard';
import SavedProjects from './pages/student/SavedProjects';
import StudentProfile from './pages/student/Profile';
import StudentAbout from './pages/student/About';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import Analytics from './pages/admin/Analytics';
import AboutEditable from './pages/admin/AboutEditable';
import AdminProfile from './pages/admin/Profile';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Auth Routes (Public) */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Guest Routes (Public) */}
          <Route path="/" element={<Splash />} />
          <Route path="/projects" element={<GuestProjects />} />
          <Route path="/about" element={<GuestAbout />} />

          {/* Student Routes (Protected) */}
          <Route 
            path="/student/dashboard" 
            element={
              <ProtectedRoute requireStudent>
                <StudentDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/student/saved-projects" 
            element={
              <ProtectedRoute requireStudent>
                <SavedProjects />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/student/profile" 
            element={
              <ProtectedRoute requireStudent>
                <StudentProfile />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/student/about" 
            element={
              <ProtectedRoute requireStudent>
                <StudentAbout />
              </ProtectedRoute>
            } 
          />

          {/* Admin Routes (Protected) */}
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedRoute requireAdmin>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/analytics" 
            element={
              <ProtectedRoute requireAdmin>
                <Analytics />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/about" 
            element={
              <ProtectedRoute requireAdmin>
                <AboutEditable />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin/profile" 
            element={
              <ProtectedRoute requireAdmin>
                <AdminProfile />
              </ProtectedRoute>
            } 
          />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}