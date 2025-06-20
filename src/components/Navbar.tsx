import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { supabase } from '@/lib/supabase/client';

const Navbar = () => {
  const user = true; // Replace with actual user authentication logic
  const pathname = '/'; // Replace with actual pathname
  const handleLogout = () => {
    // Implement logout logic
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link href="/" className={`text-trainy-text-primary hover:text-trainy-accent-blue transition-colors duration-200 ${pathname === '/' ? 'font-semibold' : ''}`}>
          Home
        </Link>
        {user ? (
          <>
            <Link href="/upload" className={`text-trainy-text-primary hover:text-trainy-accent-blue transition-colors duration-200 ${pathname === '/upload' ? 'font-semibold' : ''}`}>
              Upload
            </Link>
            <Link href="/dashboard" className={`text-trainy-text-primary hover:text-trainy-accent-blue transition-colors duration-200 ${pathname === '/dashboard' ? 'font-semibold' : ''}`}>
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="btn-primary"
            >
              Logout
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar; 