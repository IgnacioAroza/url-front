import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, KeyRound } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LoginCredentials, RegisterCredentials } from '../types/auth';

interface BaseAuthFormProps {
    type: 'login' | 'register';
}
  
interface LoginFormProps extends BaseAuthFormProps {
    type: 'login';
    onSubmit: (data: LoginCredentials) => Promise<void>;
}
  
interface RegisterFormProps extends BaseAuthFormProps {
    type: 'register';
    onSubmit: (data: RegisterCredentials) => Promise<void>;
}
  
type AuthFormProps = LoginFormProps | RegisterFormProps;

export const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit}) => {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (type === 'login') {
            const loginData: LoginCredentials = {
              email: formData.email,
              password: formData.password,
            };
            onSubmit(loginData);
          } else {
            const registerData: RegisterCredentials = {
              username: formData.username,
              email: formData.email,
              password: formData.password,
            };
            onSubmit(registerData);
          }
    };

    return (
        <div className='w-full max-w-md'>
            <form onSubmit={handleSubmit} className='bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4'>
                <div className='flex items-center justify-center mb-6'>
                    {type === 'login' ? (
                        <KeyRound className='w-8 h-8 text-blue-600' />
                    ): (
                        <User className='w-8 h-8 text-blue-600' />
                    )}
                </div>

                {type === 'register' && (
                    <div className='mb-4'>
                        <label className='block text-gray-700 text-sm font-bold mb-2" htmlFor="username'>
                            {t('Username')}
                        </label>
                        <input
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="username"
                            type="text"
                            placeholder={t('Enter username')}
                            value={formData.username}
                            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                            required
                        />
                    </div>
                )}
                    <div className='mb-4'>
                            <label className='block text-gray-700 text-sm font-bold mb-2" htmlFor="email'>
                                {t('Email')}
                            </label>
                            <input
                                className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                id="email"
                                type="email"
                                placeholder={t('Enter email')}
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                            </div>

                            <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                {t('Password')}
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="********"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                            />
                            </div>
                            
                            <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                {type === 'login' ? t('Login') : t('Register')}
                            </button>
                            <Link
                                to={type === 'login' ? '/register' : '/login'}
                                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            >
                                {type === 'login' ? t('No account?') : t('Already have an account?')}
                            </Link>
                    </div>
            </form>
        </div>
    );
};