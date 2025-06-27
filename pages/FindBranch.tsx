import React, { useState, useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, CircleMarker } from 'react-leaflet';
import { useTranslation } from '../contexts/LanguageContext';
import { mockBranches } from '../lib/mockData';
import { Branch } from '../types';
import { MapPinIcon, CrosshairIcon, ExternalLinkIcon } from '../components/icons';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const ChangeView: React.FC<{ center: [number, number]; zoom: number }> = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

const FindBranch: React.FC = () => {
  const { t } = useTranslation();
  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([13.7563, 100.5018]); // Default to Bangkok
  const [mapZoom, setMapZoom] = useState(6);
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState('');

  const handleBranchSelect = (branch: Branch) => {
    setActiveBranch(branch);
    setMapCenter([branch.lat, branch.lon]);
    setMapZoom(14);
  };

  const handleFindNearMe = () => {
    setIsLocating(true);
    setLocationError('');
    setUserLocation(null);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const newLocation: [number, number] = [latitude, longitude];
        setUserLocation(newLocation);
        setMapCenter(newLocation);
        setMapZoom(14);
        setIsLocating(false);
      },
      () => {
        setLocationError(t('locationError'));
        setIsLocating(false);
      },
      { timeout: 10000 }
    );
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{t('findBranchTitle')}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{t('findBranchSubtitle')}</p>
      
      <div className="flex flex-col lg:flex-row gap-6 h-[75vh]">
        {/* Branch List */}
        <div className="lg:w-1/3 h-full">
            <Card className="h-full flex flex-col !p-0">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">{t('branchList')}</h2>
                    <Button onClick={handleFindNearMe} isLoading={isLocating} variant="secondary" className="w-full">
                        <CrosshairIcon className="w-5 h-5 mr-2" />
                        {isLocating ? t('gettingLocation') : t('findNearMe')}
                    </Button>
                    {locationError && <p className="text-red-500 text-xs mt-2 text-center">{locationError}</p>}
                </div>
                <div className="overflow-y-auto flex-grow">
                    {mockBranches.map(branch => (
                        <div 
                            key={branch.id} 
                            onClick={() => handleBranchSelect(branch)}
                            className={`p-4 border-l-4 transition-colors cursor-pointer ${activeBranch?.id === branch.id ? 'bg-blue-50 dark:bg-gray-700/50 border-primary' : 'border-transparent hover:bg-gray-50 dark:hover:bg-gray-700/30'}`}
                        >
                            <p className="font-semibold text-gray-800 dark:text-gray-200">{branch.name}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{branch.address}</p>
                            <div className="flex justify-between items-center mt-2">
                                <p className="text-sm text-primary font-medium">{branch.phone}</p>
                                <a 
                                    href={`https://www.google.com/maps/search/?api=1&query=${branch.lat},${branch.lon}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary-light p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                    aria-label={t('openInGoogleMaps')}
                                >
                                    <ExternalLinkIcon className="w-5 h-5"/>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>

        {/* Map View */}
        <div className="lg:w-2/3 h-full">
            <Card className="h-full w-full !p-0 shadow-2xl">
                 <MapContainer center={mapCenter} zoom={mapZoom} scrollWheelZoom={true} style={{ height: "100%", width: "100%", borderRadius: '0.75rem' }}>
                    <ChangeView center={mapCenter} zoom={mapZoom} />
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {mockBranches.map(branch => (
                         <Marker key={branch.id} position={[branch.lat, branch.lon]}>
                            <Popup>
                              <div className="font-sans">
                                <p className="font-bold text-base mb-1">{branch.name}</p>
                                <p className="text-sm">{branch.address}</p>
                                <p className="text-blue-600 my-1 font-medium">{branch.phone}</p>
                                <a href={`https://www.google.com/maps/search/?api=1&query=${branch.lat},${branch.lon}`} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                                    {t('openInGoogleMaps')}
                                    <ExternalLinkIcon className="w-4 h-4" />
                                </a>
                              </div>
                            </Popup>
                        </Marker>
                    ))}
                    {userLocation && (
                        <CircleMarker center={userLocation} pathOptions={{ color: '#ef4444', fillColor: '#f87171', fillOpacity: 0.8 }} radius={8}>
                             <Popup>{t('yourLocation')}</Popup>
                        </CircleMarker>
                    )}
                </MapContainer>
            </Card>
        </div>
      </div>
    </>
  );
};

export default FindBranch;