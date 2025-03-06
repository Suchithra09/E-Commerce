import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    // Basic validation to check if passwords match
    if (password !== confirmPassword) {
      setMessage('Passwords do not match. Please try again.');
      return;
    }

    // Placeholder for registration logic
    const userData = {
      email,
      password,
    };

    try {
      // Simulating an API call for user registration
      // Replace this with actual registration API logic
      if (email && password) {
        setMessage('');
        alert('Registration successful! Redirecting to login.');
        // Redirect to login page after successful registration
      }
    } catch (error) {
      setMessage('An error occurred during registration. Please try again.');
    }
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>
        <p className="text-center text-gray-500 mb-4">Register to start shopping</p>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full mt-1 bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md py-2 px-3 shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Your Password"
              required
              className="w-full mt-1 bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md py-2 px-3 shadow-sm"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
              className="w-full mt-1 bg-gray-50 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 rounded-md py-2 px-3 shadow-sm"
            />
          </div>
          {message && <p className="text-red-600 text-sm">{message}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 font-medium"
          >
            Register
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
