import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

const Navigation = () => {
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Buy', path: '/properties?type=sale' },
    { name: 'Rent', path: '/properties?type=rent' },
    { name: 'Sell', path: '/sell' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-sm px-4 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.4931 29.8952H25.7466V32H17.4087V17.2662H11.1552V32H2.8173V14.5529L1.46565 15.9013L0 14.4214L14.2819 0L28.5639 14.4214L27.0982 15.9013L25.7466 14.5529V17.2662H23.6621V12.4481L14.2819 2.95992L4.90178 12.4481V29.8952H9.07074V15.1614H19.4931V29.8952ZM32 19.371V32H29.9155V27.7903H21.5776V19.371H32ZM29.9155 21.4758H23.6621V25.6855H29.9155V21.4758Z" fill="#1E1E1E"/>
          </svg>
          <span className="text-2xl font-bold text-gray-900">PropBot</span>
        </Link>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-lg transition-colors ${
                isActive(item.path)
                  ? 'text-blue-800 font-medium underline'
                  : 'text-gray-900 hover:text-blue-800'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Authentication Section */}
        {user ? (
          <div className="flex items-center gap-4">
            <span className="text-gray-700">Welcome, {user.email}</span>
            <Button 
              onClick={logout}
              variant="outline" 
              className="border-blue-800 text-blue-800 hover:bg-blue-50 px-4 py-2 rounded-full"
            >
              Logout
            </Button>
          </div>
        ) : (
          <Link to="/login">
            <Button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-full flex items-center gap-2">
              <span>Login / Register</span>
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 25 25" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="transform -rotate-90"
              >
                <path d="M21.0048 12.4967C21.0066 17.1967 17.2081 20.9981 12.5081 20.9999C7.80806 21.0017 4.0066 17.2032 4.0048 12.5032C4.003 7.80317 7.80155 4.00172 12.5015 3.99992C17.2015 3.99812 21.003 7.79666 21.0048 12.4967ZM5.0048 12.5028C5.00639 16.6528 8.35767 20.0015 12.5077 19.9999C16.6577 19.9983 20.0064 16.647 20.0048 12.497C20.0032 8.34705 16.6519 4.99833 12.5019 4.99992C8.35193 5.00151 5.00321 8.35279 5.0048 12.5028Z" fill="white"/>
                <path d="M17.2046 12.4982L12.3565 17.3501L11.6562 16.6503L15.8046 12.4988L11.653 8.35034L12.3528 7.65007L17.2046 12.4982Z" fill="white"/>
                <path d="M8.00488 13.0017L8.0045 12.0017L16.5045 11.9985L16.5049 12.9985L8.00488 13.0017Z" fill="white"/>
              </svg>
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
