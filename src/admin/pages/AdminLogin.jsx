import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'giftplus@2025') {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/admin/dashboard/clients');
    } else {
      setError('Invalid password');
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-[#C09F63]/30">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-[#1F2937] mb-2">Admin Login</h1>
          <div className="w-24 h-1 bg-[#C09F63] mx-auto"></div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#1F2937] mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-[#D1D5DB] rounded-lg focus:ring-2 focus:ring-[#C09F63] focus:border-[#C09F63] outline-none transition"
              required
            />
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-[#C09F63] hover:bg-[#E5B769] text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;