import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { TruckIcon, SearchIcon, AlertIcon, SettingsIcon, MapPinIcon } from '../components/icons';

const Dashboard: React.FC = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { to: '/request-pickup', text: t('requestPickup'), icon: TruckIcon, color: 'bg-blue-500' },
    { to: '/track-parcel', text: t('trackParcel'), icon: SearchIcon, color: 'bg-green-500' },
    { to: '/find-branch', text: t('findBranch'), icon: MapPinIcon, color: 'bg-purple-500' },
    { to: '/complaints', text: t('complaints'), icon: AlertIcon, color: 'bg-yellow-500' },
    { to: '/settings', text: t('settings'), icon: SettingsIcon, color: 'bg-gray-500' },
  ];

  return (
    <div>
      <div className="p-8 mb-8 bg-primary text-white rounded-xl shadow-lg relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://www.toptal.com/designers/subtlepatterns/uploads/double-bubble-outline.png")',
          }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">{t('welcomeMessage')}</h1>
          <p className="mt-2 text-lg text-blue-200">{t('dashboardSubtitle')}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {quickLinks.map((link, index) => (
          <Link 
            key={index} 
            to={link.to} 
            className={`group p-6 rounded-xl text-white shadow-lg flex flex-col items-center justify-center text-center transition-transform transform hover:-translate-y-2 ${link.color}`}
          >
            <link.icon className="w-16 h-16 mb-4 opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="text-xl font-semibold">{link.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;