import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useTranslation } from '../contexts/LanguageContext';
import AnimatedLogo from '../components/layout/AnimatedLogo';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isEmailValid = email.endsWith('@gmail.com');
    const isPasswordValid = /^\d{8,}$/.test(password);

    if (isEmailValid && isPasswordValid) {
      setError('');
      login(email);
    } else {
      setError(t('loginError'));
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-primary p-4"
      style={{
        backgroundImage: 'url("https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png")',
        backgroundRepeat: 'repeat',
      }}
    >
        <div className="absolute inset-0 bg-primary opacity-95"></div>
        <div className="relative z-10 flex flex-col items-center text-center mb-8">
            <AnimatedLogo />
        </div>

      <div className="relative z-10 w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center text-gray-900">{t('loginTitle')}</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="text-sm font-bold text-gray-600 block">
              {t('emailLabel')}
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 mt-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <p className="text-xs text-gray-500 mt-1">{t('emailHint')}</p>
          </div>
          <div>
            <label htmlFor="password">{t('passwordLabel')}</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 mt-1 text-gray-800 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
             <p className="text-xs text-gray-500 mt-1">{t('passwordHint')}</p>
          </div>
          {error && <p className="text-sm text-center text-red-500">{error}</p>}
          <div>
            <button
              type="submit"
              className="w-full py-3 font-bold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors duration-300"
            >
              {t('loginButton')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;