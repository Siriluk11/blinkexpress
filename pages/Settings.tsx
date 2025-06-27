import React, { useState } from 'react';
import { useTranslation } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import Card from '../components/ui/Card';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const Settings: React.FC = () => {
  const { t } = useTranslation();
  const { user, updateUser } = useAuth();
  const [profilePicture, setProfilePicture] = useState(user?.profilePicture);
  const [showSuccess, setShowSuccess] = useState('');
  
  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const newPictureUrl = URL.createObjectURL(e.target.files[0]);
      setProfilePicture(newPictureUrl);
    }
  };

  const handleProfileSave = () => {
    if (profilePicture) {
      updateUser({ profilePicture });
      setShowSuccess('profile');
      setTimeout(() => setShowSuccess(''), 3000);
    }
  };

  const handlePasswordUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you'd validate the current password and update it.
    // Here, we just show a success message.
    setShowSuccess('password');
    setTimeout(() => setShowSuccess(''), 3000);
    e.currentTarget.reset();
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">{t('settings')}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Settings */}
        <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">{t('settingsTitle')}</h2>
            <Card>
                <div className="flex flex-col items-center space-y-4">
                <img
                    src={profilePicture}
                    alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary"
                />
                <input
                    type="file"
                    id="photo-upload"
                    className="hidden"
                    accept="image/*"
                    onChange={handlePhotoChange}
                />
                <Button
                    variant="secondary"
                    onClick={() => document.getElementById('photo-upload')?.click()}
                >
                    {t('changePhoto')}
                </Button>
                <Button onClick={handleProfileSave}>{t('saveChanges')}</Button>
                {showSuccess === 'profile' && <p className="text-green-500 text-sm">{t('saveChanges')}</p>}
                </div>
            </Card>
        </div>

        {/* Security Settings */}
        <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">{t('security')}</h2>
            <Card>
                <form onSubmit={handlePasswordUpdate} className="space-y-6">
                    <h3 className="text-lg font-medium text-gray-800 dark:text-white">{t('changePassword')}</h3>
                    <Input id="currentPassword" label={t('currentPassword')} type="password" required/>
                    <Input id="newPassword" label={t('newPassword')} type="password" required />
                    <Input id="confirmNewPassword" label={t('confirmNewPassword')} type="password" required />
                    <div className="text-right">
                        <Button type="submit">{t('updatePassword')}</Button>
                    </div>
                     {showSuccess === 'password' && <p className="text-green-500 text-sm text-right">{t('passwordUpdateSuccess')}</p>}
                </form>
            </Card>
        </div>
      </div>
    </>
  );
};

export default Settings;
