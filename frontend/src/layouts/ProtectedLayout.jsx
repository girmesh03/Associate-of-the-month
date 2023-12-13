import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const ProtectedLayout = () => {
  const isAuth = true;
  return (
    <>
      {isAuth ? (
        <section
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Outlet />
        </section>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default ProtectedLayout;
