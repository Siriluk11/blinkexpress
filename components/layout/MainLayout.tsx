import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900 font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="relative flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
           <div
            className="absolute inset-0 opacity-5 dark:opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: 'url("https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png")',
              backgroundRepeat: 'repeat',
            }}
          ></div>
          <div className="relative container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;