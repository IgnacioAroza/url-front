/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export const Header: React.FC = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        try {
            logout();
            navigate('/login');
            toast.success(t('Session closed successfully'));
        } catch (error) {
            toast.error(t('Error closing session'));
        }
    };

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
    }

    return (
        <header className='bg-white shadow'>
            <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 justify-between items-center'>
                <h1 className='text-3xl font-bold text-gray-900'>{t('URL Shortener')}</h1>
                <div className='flex items-center space-x-4'>
                    <button
                        onClick={toggleLanguage}
                        className='px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                    >
                        {i18n.language === 'en' ? 'ES' : 'EN'}
                    </button>
                    <button
                        onClick={handleLogout}
                        className='inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-red-600 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                    >
                        <LogOut className='w-4 h-4 mr-2' />
                        {t('Loguot')}
                    </button>
                </div>
            </div>
        </header>
    );
}