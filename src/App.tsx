import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { UrlShortener } from './components/UrlShortener';
import { Header } from './components/Header';
import { AuthProvider, useAuth } from './context/AuthContext';

const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

const AppContent: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      {isAuthenticated && <Header />}
      <div className='flex-grow flex items-center justify-center'>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute
                element={
                  <div className='w-full max-w-4xl px-4 py-8 flex justify-center'>
                    <UrlShortener />
                  </div>
                }
              />
            }
          />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Toaster position='top-right' />
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

export default App;