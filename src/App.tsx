import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Auth Pages (Unified)
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
    <Router>
      <Routes>
        {/* Auth Routes (Unified) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Guest Routes */}
        <Route path="/" element={<Splash />} />
        <Route path="/projects" element={<GuestProjects />} />
        <Route path="/about" element={<GuestAbout />} />

        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/saved-projects" element={<SavedProjects />} />
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/about" element={<StudentAbout />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/about" element={<AboutEditable />} />
        <Route path="/admin/profile" element={<AdminProfile />} />

        {/* Catch all */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}