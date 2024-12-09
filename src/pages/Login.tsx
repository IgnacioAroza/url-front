/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthForm } from '../components/AuthForm';
import { authService } from '../services/userService';
import { LoginCredentials } from '../types/auth';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export const Login: React.FC = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = async (credentials: LoginCredentials) => {
        try {
            const response = await authService.login(credentials);
            if (response && response.token) {
                login(response.token)
                toast.success(t('Login successful!'));
                navigate('/', { replace: true });
            } else {
                throw new Error('No token received');
            }
          } catch (error) {
            toast.error(t('Error registering. Please try again.'));
          }
    }

    return (
        <div className='w-full max-w-md'>
            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                {t('Sign in to your account')}
            </h2>
            <div className="mt-8">
                <AuthForm type='login' onSubmit={handleLogin} />
            </div>
        </div>
    );
}