import { useState } from 'react';

const Login = ({ onBackToSignUp, onLoginSuccess }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem('userData') || '{}');

    if (loginData.email === userData.email && loginData.password === userData.password) {
      alert(`Welcome back, ${userData.name}!`);
      onLoginSuccess(); // Navigate to dashboard after successful login
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div className="w-full max-w-md px-4 py-12 mx-auto">
      <div className="bg-white p-10 rounded-xl shadow-xl">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:bg-white"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:bg-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?
          <button onClick={onBackToSignUp} className="text-blue-600 hover:text-blue-800 underline ml-2">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;



{ /*import { useState } from 'react';

const Login = ({ onBackToSignIn }) => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = JSON.parse(localStorage.getItem('userData') || '{}');

    if (loginData.email === userData.email && loginData.password === userData.password) {
      alert(`Welcome back, ${userData.name}!`);
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div className="w-full max-w-md px-4 py-12 mx-auto">
      <div className="bg-white p-10 rounded-xl shadow-xl">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-8">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:bg-white"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:bg-white"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Don't have an account?
          <button onClick={onBackToSignIn} className="text-blue-600 hover:text-blue-800 underline ml-2">
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login; */}
