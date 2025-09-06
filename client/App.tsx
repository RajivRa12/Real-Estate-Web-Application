import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import Navigation from '@/components/Navigation';
import Homepage from '@/pages/Homepage';
import Properties from '@/pages/Properties';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';

// Placeholder components for other routes
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen bg-white">
    <Navigation />
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">{title}</h1>
      <p className="text-xl text-gray-600 mb-8">
        This page is under development. Please continue prompting to have me build out this section!
      </p>
      <div className="bg-gray-100 rounded-xl p-12">
        <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6"></div>
        <p className="text-gray-500">Coming Soon...</p>
      </div>
    </div>
  </div>
);

const NotFound = () => (
  <div className="min-h-screen bg-white">
    <Navigation />
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">404 - Page Not Found</h1>
      <p className="text-xl text-gray-600 mb-8">
        The page you're looking for doesn't exist.
      </p>
      <a href="/" className="text-blue-800 hover:text-blue-900 font-semibold">
        Go back to Homepage
      </a>
    </div>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Homepage />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Placeholder Pages */}
            <Route path="/sell" element={<PlaceholderPage title="Sell Your Property" />} />
            <Route path="/about" element={<PlaceholderPage title="About Us" />} />
            <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
            
            {/* 404 Route - Must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
