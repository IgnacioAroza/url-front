/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { urlService } from '../services/urlService';
import { UrlResponse } from '../types/api';
import { UrlList } from './UrlList';
import toast from 'react-hot-toast';

export const UrlShortener: React.FC = () => {
    const { t } = useTranslation(); 
    const [longUrl, setLongUrl] = useState('');
    const [urls, setUrls] = useState<UrlResponse[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadUserUrls();
    }, []);

    const loadUserUrls = async () => {
        setIsLoading(true);
        try {
            const userUrls = await urlService.getUserUrls();
            const sortedUrls = userUrls.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            setUrls(sortedUrls);
        } catch (error) {
            toast.error(t('Error loading user URLs'));
        } finally {
            setIsLoading(false);
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await urlService.shortenUrl(longUrl);
            const newUrl: UrlResponse = {
                id: response.id,
                userId: response.userId,
                shortCode: response.shortCode,
                originalUrl: response.originalUrl || longUrl,
                clicks: response.clicks || 0,
                createdAt: response.createdAt || new Date().toISOString()
            };
            setUrls(prevUrls => [newUrl, ...prevUrls]);
            setLongUrl('');
            toast.success(t('URL shortened successfully!'));
        } catch (error) {
            toast.error(t('Error shortening URL'));
        }
    }

    return (
        <div className='w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg'>
            <div className='flex items-center justify-center mb-8'>
                <Link2 className='w-12 h-12 text-blue-600' />
            </div>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                    <label htmlFor='longUrl' className='block text-sm font-medium text-gray-700'>
                        {t('Enter your URL')}
                    </label>
                    <div className='mt-1'>
                        <input
                            type="url"
                            id="longUrl"
                            className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="https://ejemplo.com/url/muy/larga"
                            value={longUrl}
                            onChange={(e) => setLongUrl(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <button
                    type='submit'
                    className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                >
                    {t('Shorten URL')}
                </button>
            </form>

            <UrlList urls={urls} isLoading={isLoading} />
        </div>
    );
};