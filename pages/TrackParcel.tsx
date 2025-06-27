import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { mockParcels } from '../lib/mockData';
import { Parcel } from '../types';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { SearchIcon } from '../components/icons';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const TrackParcel: React.FC = () => {
  const { t } = useTranslation();
  const [trackingNumber, setTrackingNumber] = useState('');
  const [parcel, setParcel] = useState<Parcel | null>(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const mapRef = useRef<any>(null);

  const handleTrack = () => {
    setIsLoading(true);
    setError('');
    setParcel(null);
    setTimeout(() => {
      const foundParcel = mockParcels[trackingNumber.toUpperCase()];
      if (foundParcel) {
        setParcel(foundParcel);
      } else {
        setError(t('noParcelFound'));
      }
      setIsLoading(false);
    }, 1000);
  };
  
  const lastLocation = parcel?.history?.[0];

  useEffect(() => {
    if (mapRef.current && lastLocation?.lat && lastLocation?.lon) {
      mapRef.current.setView([lastLocation.lat, lastLocation.lon], 13);
    }
  }, [parcel, lastLocation]);

  const getStatusChipClass = (status: Parcel['status']) => {
    switch (status) {
      case 'DELIVERED': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'IN_TRANSIT': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'PENDING': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'EXCEPTION': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">{t('trackTitle')}</h1>
      <Card className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <Input
            id="trackingNumber"
            label={t('trackingNumber')}
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="e.g., BE123456789TH"
            containerClassName="flex-grow"
          />
          <Button onClick={handleTrack} isLoading={isLoading}>
            <SearchIcon className="w-5 h-5 mr-2" />
            {t('trackButton')}
          </Button>
        </div>
      </Card>
      {error && <Card><p className="text-red-500 text-center">{error}</p></Card>}
      {parcel && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{t('parcelStatus')}: {parcel.id}</h2>
                </div>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusChipClass(parcel.status)}`}>
                  {t(`status_${parcel.status}`)}
                </span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">{t('history')}</h3>
              <div className="border-l-2 border-primary pl-6 space-y-8 relative">
                {parcel.history.map((item, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-[35px] top-1.5 w-4 h-4 bg-primary rounded-full border-4 border-white dark:border-gray-800"></div>
                    <p className="font-semibold text-gray-800 dark:text-white">{item.status}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.location}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">{item.timestamp}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
          {lastLocation?.lat && lastLocation?.lon && (
             <div className="lg:col-span-1">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">{t('lastKnownLocation')}</h3>
                <Card className="h-96 w-full !p-0">
                    <MapContainer whenCreated={map => mapRef.current = map} center={[lastLocation.lat, lastLocation.lon]} zoom={13} scrollWheelZoom={false} style={{ height: "100%", width: "100%", borderRadius: '0.75rem' }}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[lastLocation.lat, lastLocation.lon]}>
                            <Popup>
                              {lastLocation.status} <br /> {lastLocation.location}
                            </Popup>
                        </Marker>
                    </MapContainer>
                </Card>
             </div>
          )}
        </div>
      )}
    </>
  );
};

export default TrackParcel;