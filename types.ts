export enum Language {
  TH = 'th',
  EN = 'en',
  CN = 'cn',
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface User {
  email: string;
  profilePicture?: string;
}

export interface ParcelHistoryItem {
  status: string;
  location: string;
  timestamp: string;
  lat?: number;
  lon?: number;
}

export interface Parcel {
  id: string;
  status: 'PENDING' | 'IN_TRANSIT' | 'DELIVERED' | 'EXCEPTION';
  history: ParcelHistoryItem[];
}

export interface Branch {
    id: number;
    name: string;
    address: string;
    lat: number;
    lon: number;
    phone: string;
}