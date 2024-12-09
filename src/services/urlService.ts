import { api } from './api';
import { UrlResponse } from '../types/api';

export const urlService = {
    async shortenUrl(longUrl: string): Promise<UrlResponse> {
        const { data } = await api.post<UrlResponse>('/urls/shorten', { url: longUrl });
        return data;
    },
    
    async getOriginalUrl(shortCode: string): Promise<UrlResponse> {
       const { data } = await api.get<UrlResponse>(`/${shortCode}`);
       return data;
    },

    async getUserUrls(): Promise<UrlResponse[]> {
        try {
          const response = await api.get<UrlResponse[]>('/urls/user');
          return response.data;
        } catch (error) {
          console.error('Error fetching user URLs:', error);
          throw error;
        }
      }
}
