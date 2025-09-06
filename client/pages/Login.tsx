import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, resetPassword } from '@/services/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [resetMessage, setResetMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Please enter your email address first');
      return;
    }
    
    const result = await resetPassword(email);
    if (result.success) {
      setResetMessage(result.message);
      setError('');
    } else {
      setError(result.message);
      setResetMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4 border border-blue-800 rounded-full px-6 py-3">
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-90">
              <path d="M4.00484 12.5033C4.00304 7.80334 7.80159 4.00188 12.5016 4.00008C17.2016 3.99828 21.003 7.79683 21.0048 12.4968C21.0066 17.1968 17.2081 20.9983 12.5081 21.0001C7.8081 21.0019 4.00664 17.2033 4.00484 12.5033ZM20.0048 12.4972C20.0033 8.34721 16.652 4.99849 12.502 5.00008C8.35197 5.00167 5.00325 8.35295 5.00484 12.503C5.00643 16.653 8.35772 20.0017 12.5077 20.0001C16.6577 19.9985 20.0064 16.6472 20.0048 12.4972Z" fill="#555555"/>
              <path d="M7.80476 12.5018L12.6529 7.64993L13.3532 8.34966L9.20476 12.5012L13.3564 16.6497L12.6566 17.3499L7.80476 12.5018Z" fill="#555555"/>
              <path d="M17.0046 11.9983L17.005 12.9983L8.50502 13.0015L8.50464 12.0015L17.0046 11.9983Z" fill="#555555"/>
            </svg>
            <span className="text-gray-600">Back to Homepage</span>
          </Link>

          <Link to="/" className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.4931 29.8952H25.7466V32H17.4087V17.2662H11.1552V32H2.8173V14.5529L1.46565 15.9013L0 14.4214L14.2819 0L28.5639 14.4214L27.0982 15.9013L25.7466 14.5529V17.2662H23.6621V12.4481L14.2819 2.95992L4.90178 12.4481V29.8952H9.07074V15.1614H19.4931V29.8952ZM32 19.371V32H29.9155V27.7903H21.5776V19.371H32ZM29.9155 21.4758H23.6621V25.6855H29.9155V21.4758Z" fill="#1E1E1E"/>
            </svg>
            <span className="text-2xl font-bold text-gray-900">PropBot</span>
          </Link>

          <Button className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-full">
            About Us
            <svg width="20" height="20" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2 transform -rotate-90">
              <path d="M21.0047 12.4967C21.0065 17.1967 17.2079 20.9981 12.5079 20.9999C7.80793 21.0017 4.00648 17.2032 4.00468 12.5032C4.00288 7.80317 7.80142 4.00172 12.5014 3.99992C17.2014 3.99812 21.0029 7.79666 21.0047 12.4967Z" fill="white"/>
              <path d="M17.2048 12.4982L12.3566 17.3501L11.6563 16.6503L15.8048 12.4988L11.6532 8.35034L12.3529 7.65007L17.2048 12.4982Z" fill="white"/>
            </svg>
          </Button>
        </div>
      </div>

      <div className="flex min-h-[calc(100vh-85px)]">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Log In</h1>

            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4">
                {error}
              </div>
            )}

            {resetMessage && (
              <div className="bg-green-50 text-green-600 p-3 rounded-lg mb-4">
                {resetMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Address */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email Id"
                    className="w-full px-6 py-4 border-2 border-blue-800 rounded-xl text-gray-700 placeholder-gray-400"
                    required
                  />
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Your Password"
                    className="w-full px-6 py-4 border-2 border-blue-800 rounded-xl text-gray-700 placeholder-gray-400"
                    required
                  />
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.78 13.065C20.8305 13.2227 20.9415 13.354 21.0887 13.4299C21.2359 13.5059 21.4072 13.5203 21.565 13.47C21.89 13.365 22.075 13.015 21.97 12.685L21.9695 12.6835C21.925 12.55 19.4205 5 11.9995 5C4.58003 5 2.07503 12.55 2.03103 12.684L2.03053 12.685C1.92553 13.015 2.10553 13.365 2.43553 13.47C2.76553 13.575 3.11553 13.395 3.22053 13.065C3.31003 12.785 5.47503 6.25 12 6.25C18.525 6.25 20.69 12.785 20.78 13.065ZM12 18C13.1935 18 14.3381 17.5259 15.182 16.682C16.0259 15.8381 16.5 14.6935 16.5 13.5C16.5 12.3065 16.0259 11.1619 15.182 10.318C14.3381 9.47411 13.1935 9 12 9C10.8066 9 9.66196 9.47411 8.81805 10.318C7.97413 11.1619 7.50003 12.3065 7.50003 13.5C7.50003 14.6935 7.97413 15.8381 8.81805 16.682C9.66196 17.5259 10.8066 18 12 18Z"/>
                  </svg>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                    Remember Me
                  </label>
                </div>
                <button 
                  type="button" 
                  onClick={handleForgotPassword}
                  className="text-sm text-red-600 hover:text-red-700"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-800 hover:bg-blue-900 text-white py-4 rounded-full text-xl font-medium"
              >
                {loading ? 'Logging in...' : 'Log In'}
              </Button>
            </form>

            {/* Social Login */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">OR CONTINUE WITH</span>
                </div>
              </div>

              <div className="mt-6 flex justify-center space-x-4">
                <button className="bg-gray-100 hover:bg-gray-200 p-3 rounded-xl">
                  <svg className="w-8 h-8" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.5988 13.0221C28.0468 14.5719 26.4706 17.2288 26.4706 20.1808C26.4706 23.5019 28.4972 26.5277 31.5745 27.7823C30.9741 29.7011 30.0734 31.4724 28.9475 33.096C27.2962 35.3838 25.5699 37.7454 23.0179 37.7454C20.4659 37.7454 19.7154 36.2694 16.713 36.2694C13.7858 36.2694 12.735 37.8192 10.3331 37.8192C7.93125 37.8192 6.27997 35.679 4.40352 33.0222C1.92661 29.3321 0.500504 25.0517 0.425446 20.5498C0.425446 13.2435 5.22916 9.33207 10.0329 9.33207C12.5849 9.33207 14.6865 10.9557 16.2627 10.9557C17.7639 10.9557 20.1657 9.25827 23.0179 9.25827C26.0202 9.18447 28.8724 10.5867 30.5988 13.0221ZM21.6669 6.15863C22.9429 4.68261 23.6184 2.83759 23.6934 0.918765C23.6934 0.697362 23.6934 0.402158 23.6184 0.180756C21.4417 0.402158 19.4151 1.43537 17.989 3.05899C16.713 4.46121 15.9625 6.23243 15.8874 8.15126C15.8874 8.37266 15.8874 8.59406 15.9625 8.81547C16.1126 8.81547 16.3378 8.88927 16.4879 8.88927C18.5144 8.74167 20.3909 7.70845 21.6669 6.15863Z" fill="black"/>
                  </svg>
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 p-3 rounded-xl">
                  <svg className="w-8 h-8" viewBox="0 0 37 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37 19C37 8.50738 28.7165 0 18.5 0C8.2835 0 0 8.50738 0 19C0 28.4826 6.76417 36.3434 15.6096 37.7702V24.4935H10.9111V19H15.6096V14.8131C15.6096 10.0518 18.3725 7.41991 22.5975 7.41991C24.6216 7.41991 26.7393 7.79131 26.7393 7.79131V12.4672H24.4056C22.1084 12.4672 21.3904 13.9314 21.3904 15.4357V19H26.5207L25.7012 24.4935H21.3904V37.7702C30.2358 36.3461 37 28.4853 37 19Z" fill="#1977F3"/>
                  </svg>
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 p-3 rounded-xl">
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </button>
              </div>
            </div>

            <p className="mt-8 text-center text-gray-600">
              Doesn't have an account?{' '}
              <Link to="/signup" className="text-blue-800 font-semibold hover:text-blue-900">
                Create One
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block lg:w-1/2">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/a42876b9967f4f29a7ec1a526fb795cf346e5daa?width=1890"
            alt="Modern House"
            className="w-full h-full object-cover rounded-l-[34px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
