import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from '../../contexts/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import AnimatedLogo from './AnimatedLogo';
import { DashboardIcon, TruckIcon, SearchIcon, AlertIcon, SettingsIcon, LogoutIcon, MapPinIcon } from '../icons';

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const { logout } = useAuth();

  const navItems = [
    { to: '/', text: t('dashboard'), icon: DashboardIcon },
    { to: '/request-pickup', text: t('requestPickup'), icon: TruckIcon },
    { to: '/track-parcel', text: t('trackParcel'), icon: SearchIcon },
    { to: '/find-branch', text: t('findBranch'), icon: MapPinIcon },
    { to: '/complaints', text: t('complaints'), icon: AlertIcon },
    { to: '/settings', text: t('settings'), icon: SettingsIcon },
  ];

  const linkClasses = "flex items-center px-4 py-3 text-lg font-medium rounded-lg transition-colors";
  const activeLinkClasses = "bg-blue-700 text-white";
  const inactiveLinkClasses = "text-blue-100 hover:bg-blue-500 hover:text-white";

  return (
    <div className="flex flex-col h-full bg-primary text-white w-64 p-4">
      <div className="mb-10">
        <AnimatedLogo />
      </div>
      <nav className="flex-grow">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `${linkClasses} ${isActive ? activeLinkClasses : inactiveLinkClasses}`}
              >
                <item.icon className="w-6 h-6 mr-3" />
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <button
          onClick={logout}
          className={`${linkClasses} ${inactiveLinkClasses} w-full`}
        >
          <LogoutIcon className="w-6 h-6 mr-3" />
          {t('logout')}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;