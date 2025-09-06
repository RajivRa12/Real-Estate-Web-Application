import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/services/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      navigate('/login');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
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
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Create new account</h1>

            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Full Name"
                  className="w-full px-6 py-4 border-2 border-blue-800 rounded-xl text-gray-700 placeholder-gray-400"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter Your Password"
                    className="w-full px-6 py-4 border-2 border-blue-800 rounded-xl text-gray-700 placeholder-gray-400"
                    required
                  />
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.78 13.065C20.8305 13.2227 20.9415 13.354 21.0887 13.4299C21.2359 13.5059 21.4072 13.5203 21.565 13.47C21.89 13.365 22.075 13.015 21.97 12.685L21.9695 12.6835C21.925 12.55 19.4205 5 11.9995 5C4.58003 5 2.07503 12.55 2.03103 12.684L2.03053 12.685C1.92553 13.015 2.10553 13.365 2.43553 13.47C2.76553 13.575 3.11553 13.395 3.22053 13.065C3.31003 12.785 5.47503 6.25 12 6.25C18.525 6.25 20.69 12.785 20.78 13.065ZM12 18C13.1935 18 14.3381 17.5259 15.182 16.682C16.0259 15.8381 16.5 14.6935 16.5 13.5C16.5 12.3065 16.0259 11.1619 15.182 10.318C14.3381 9.47411 13.1935 9 12 9C10.8066 9 9.66196 9.47411 8.81805 10.318C7.97413 11.1619 7.50003 12.3065 7.50003 13.5C7.50003 14.6935 7.97413 15.8381 8.81805 16.682C9.66196 17.5259 10.8066 18 12 18Z"/>
                  </svg>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-lg font-medium text-gray-900 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Your Password"
                    className="w-full px-6 py-4 border-2 border-blue-800 rounded-xl text-gray-700 placeholder-gray-400"
                    required
                  />
                  <svg className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.78 13.065C20.8305 13.2227 20.9415 13.354 21.0887 13.4299C21.2359 13.5059 21.4072 13.5203 21.565 13.47C21.89 13.365 22.075 13.015 21.97 12.685L21.9695 12.6835C21.925 12.55 19.4205 5 11.9995 5C4.58003 5 2.07503 12.55 2.03103 12.684L2.03053 12.685C1.92553 13.015 2.10553 13.365 2.43553 13.47C2.76553 13.575 3.11553 13.395 3.22053 13.065C3.31003 12.785 5.47503 6.25 12 6.25C18.525 6.25 20.69 12.785 20.78 13.065ZM12 18C13.1935 18 14.3381 17.5259 15.182 16.682C16.0259 15.8381 16.5 14.6935 16.5 13.5C16.5 12.3065 16.0259 11.1619 15.182 10.318C14.3381 9.47411 13.1935 9 12 9C10.8066 9 9.66196 9.47411 8.81805 10.318C7.97413 11.1619 7.50003 12.3065 7.50003 13.5C7.50003 14.6935 7.97413 15.8381 8.81805 16.682C9.66196 17.5259 10.8066 18 12 18Z"/>
                  </svg>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-800 hover:bg-blue-900 text-white py-4 rounded-full text-xl font-medium"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>

            <p className="mt-8 text-center text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-800 font-semibold hover:text-blue-900">
                Log In
              </Link>
            </p>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block lg:w-1/2">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/66c6b056d3d6bce7cdc2396c1f9febb4871b6bde?width=1890"
            alt="Modern House"
            className="w-full h-full object-cover rounded-l-[34px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
