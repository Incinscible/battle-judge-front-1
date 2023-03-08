import React from 'react';
import Navbar from '@/components/Navbar';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { LinearProgress } from '@mui/material';
import AdminNavbar from '@/components/AdminNavbar';

const PrivateRoutes: React.FC = () => {
  const { user, isAuth, loading } = useAuth();
  const { pathname } = useLocation();

  console.log(user, isAuth, loading);
  if (!isAuth) return <Navigate to="/login" />;
  if (loading) return <LinearProgress />;

  const isAdmin = user?.role === 'admin';

  return (
    <>
      {isAdmin ? (
        <AdminNavbar activeTab={'/admin'} />
      ) : (
        <Navbar activeTab={pathname} />
      )}
      <Outlet />
    </>
  );
};

export default PrivateRoutes;
