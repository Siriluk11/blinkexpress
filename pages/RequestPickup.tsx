import React, { useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const RequestPickup: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <Card className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{t('requestSuccess')}</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{t('requestSuccessMsg')}</p>
        <Button onClick={() => setIsSubmitted(false)} className="mt-6">
          {t('requestPickup')}
        </Button>
      </Card>
    );
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{t('pickupTitle')}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{t('pickupSubtitle')}</p>
      <Card>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input id="fullName" label={t('fullName')} type="text" required />
            <Input id="phoneNumber" label={t('phoneNumber')} type="tel" required />
          </div>
          <Input id="address" label={t('address')} type="text" required />
          <div>
            <label htmlFor="parcelDetails" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              {t('parcelDetails')}
            </label>
            <textarea
              id="parcelDetails"
              rows={4}
              required
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary focus:border-primary transition"
            ></textarea>
          </div>
          <div className="text-right">
            <Button type="submit" isLoading={isLoading}>{t('requestButton')}</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default RequestPickup;
