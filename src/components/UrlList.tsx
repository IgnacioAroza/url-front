import React from 'react';
import { ExternalLink, Copy } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { UrlResponse } from '../types/api';
import toast from 'react-hot-toast';

interface UrlListProps {
    urls: UrlResponse[];
    isLoading: boolean;
  }

export const UrlList: React.FC<UrlListProps> = ({ urls, isLoading }) => {
    const { t } = useTranslation();

    const copyToClipboard = (url: string, isShortUrl: boolean) => {
        navigator.clipboard.writeText(url);
        toast.success(t(isShortUrl ? 'Short URL copied to clipboard!' : 'Original URL copied to clipboard!'));
    };

    return (
        <div className='mt-8 bg-white rounded-lg shadow overflow-hidden'>
            <div className='px-4 py-5 sm:px-6'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-lg leading-6 font-medium text-gray-900'>
                        {t('Your shortened URLs')}
                    </h3>
                </div>
            </div>
            <div className='border-t border-gray-200'>
                {isLoading ? (
                    <div className='px-4 py-8 text-center text-gray-500'>
                        {t('Loading URLs...')}
                    </div>
                ) : (
                    <ul className='divide-y divide-gray-200'>
                        {urls.map((url) => (
                            <li key={url.shortCode} className='px-4 py-4 sm:px-6 hover:bg-gray-50'>
                                <div className='flex flex-col'>
                                    <p className='text-sm font-medium text-blue-600'>
                                        {t('Short URL')}: {`${url.shortCode}`}
                                    </p>
                                    <p className='mt-1 text-sm text-gray-500'>
                                        {t('Original URL')}: {url.originalUrl}
                                    </p>
                                </div>
                                <div className='flex space-x-2'>
                                    <button
                                        onClick={() => copyToClipboard(`${window.location.origin}/${url.shortCode}`, true)}
                                        className='p-2 text-gray-400 hover:text-gray-600'
                                        title={t('Copy short URL')}
                                    >
                                        <Copy className='w-5 h-5' />
                                    </button>
                                    <a
                                    href={url.originalUrl}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='p-2 text-gray-400 hover:text-gray-600'
                                    title={t('Open original URL')}
                                    >
                                        <ExternalLink className='2-5 h-5' />
                                    </a>
                                </div>
                            </li>
                        ))}
                        {urls.length === 0 && (
                            <li className='px-4 py-8 text-center text-gray-500'>
                                {t("You haven't shortened any URLs yet")}
                            </li>
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
};
