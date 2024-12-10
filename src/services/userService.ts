/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from './api';
import { LoginCredentials, RegisterCredentials } from '../types/auth';
import { AuthResponse } from '../types/api';

export const authService = {
    async login(credentials: LoginCredentials): Promise<AuthResponse> {
        try {
            const { data } = await api.post<AuthResponse>('/users/login', {
              email: credentials.email,
              password: credentials.password
            });
            if (data.token) {
              localStorage.setItem('token', data.token);
            }
            return data;
          } catch (error: any) {
            console.error('Error en login:', error.response?.data || error.message);
            throw new Error(error.response?.data?.error || 'Error al iniciar sesión');
          }
    },

    async register(credentials: RegisterCredentials): Promise<AuthResponse> {
        try {
            const { data } = await api.post<AuthResponse>('/users/register', {
              username: credentials.username,
              email: credentials.email,
              password: credentials.password
            });
            return data;
          } catch (error: any) {
            console.error('Error en registro:', error.response?.data || error.message);
            throw new Error(error.response?.data?.error || 'Error al registrar usuario');
          }
    },

    logout() {
        localStorage.removeItem('token');
    }
}