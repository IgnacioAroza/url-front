/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthForm } from '../components/AuthForm';
import { authService } from '../services/userService';
import { RegisterCredentials } from '../types/auth';
import toast from 'react-hot-toast';

export const Register: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRegister = async (credentials: RegisterCredentials) => {
    try {
      const response = await authService.register(credentials);
      localStorage.setItem('token', response.token);
      toast.success(t('Registration successful!'));
      navigate('/');
    } catch (error) {
      toast.error(t('Error registering. Please try again.'));
    }
  };

  return (
    <div className="w-full max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {t('Create your account')}
        </h2>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <AuthForm type="register" onSubmit={handleRegister} />
      </div>
    </div>
  );
};