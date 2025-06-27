import React, { useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Complaints: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const addWatermark = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          const ctx = canvas.getContext('2d');
          if (!ctx) return;

          // Draw the image
          ctx.drawImage(img, 0, 0);

          // Add watermark
          ctx.font = `bold ${Math.max(24, canvas.width / 20)}px Arial`;
          ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          
          // Rotate context to draw diagonal text
          ctx.translate(canvas.width / 2, canvas.height / 2);
          ctx.rotate(-0.45); // ~25 degrees
          ctx.fillText('BlinkExpress', 0, 0);
          
          resolve(canvas.toDataURL('image/jpeg'));
        };
        img.src = event.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  };

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const watermarkedImage = await addWatermark(e.target.files[0]);
      setPhotoPreview(watermarkedImage);
    }
  };

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
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{t('complaintSuccess')}</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">{t('complaintSuccessMsg')}</p>
        <Button onClick={() => { setIsSubmitted(false); setPhotoPreview(null); }} className="mt-6">
          {t('complaintsTitle')}
        </Button>
      </Card>
    );
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">{t('complaintsTitle')}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{t('complaintsSubtitle')}</p>
      <Card>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input id="trackingNumber" label={t('trackingNumber')} type="text" required />
          <div>
            <label htmlFor="issueType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('issueType')}</label>
            <select id="issueType" required className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary focus:border-primary transition">
              <option value="damage">{t('issueType_damage')}</option>
              <option value="lost">{t('issueType_lost')}</option>
              <option value="delay">{t('issueType_delay')}</option>
              <option value="other">{t('issueType_other')}</option>
            </select>
          </div>
          <div>
            <label htmlFor="issueDescription" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('issueDescription')}</label>
            <textarea id="issueDescription" rows={4} required className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary focus:border-primary transition"></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('uploadPhoto')}</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                {photoPreview ? (
                  <img src={photoPreview} alt="Preview" className="mx-auto h-24 w-auto object-cover rounded-md" />
                ) : (
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 4v.01M28 8l-4.586-4.586a2 2 0 00-2.828 0L16 8m12 12h.01M28 8L20 16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                <div className="flex text-sm text-gray-600 dark:text-gray-400">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white dark:bg-gray-800 rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" onChange={handlePhotoChange} accept="image/*" />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <Button type="submit" isLoading={isLoading}>{t('submitComplaint')}</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default Complaints;