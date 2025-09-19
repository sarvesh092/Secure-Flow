import React from 'react';
import FloatingClouds from './CloudsEffect';

export const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-sky-900 to-cyan-900">
      <FloatingClouds
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingClouds
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={3}
      />
      {children}
    </div>
  );
};

export default AuthLayout;
