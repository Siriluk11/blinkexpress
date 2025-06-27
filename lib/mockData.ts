import { Parcel, Branch } from '../types';

export const mockParcels: { [key: string]: Parcel } = {
  'BE123456789TH': {
    id: 'BE123456789TH',
    status: 'IN_TRANSIT',
    history: [
      { status: 'พัสดุถึงศูนย์คัดแยกหลัก', location: 'ศูนย์คัดแยกหลัก กรุงเทพ', timestamp: '2024-07-21 08:30', lat: 13.7563, lon: 100.5018 },
      { status: 'รถเข้ารับพัสดุเรียบร้อย', location: 'สาขานนทบุรี', timestamp: '2024-07-20 15:45', lat: 13.859, lon: 100.52 },
    ],
  },
  'BE987654321TH': {
    id: 'BE987654321TH',
    status: 'DELIVERED',
    history: [
      { status: 'จัดส่งสำเร็จ', location: 'ลูกค้า จ.เชียงใหม่', timestamp: '2024-07-19 11:20', lat: 18.7883, lon: 98.9853 },
      { status: 'พัสดุถึงศูนย์กระจายสินค้าปลายทาง', location: 'ศูนย์กระจายสินค้าเชียงใหม่', timestamp: '2024-07-19 07:00', lat: 18.79, lon: 98.99 },
      { status: 'พัสดุถึงศูนย์คัดแยกหลัก', location: 'ศูนย์คัดแยกหลัก กรุงเทพ', timestamp: '2024-07-18 14:00', lat: 13.7563, lon: 100.5018 },
      { status: 'รถเข้ารับพัสดุเรียบร้อย', location: 'สาขาลาดพร้าว กรุงเทพ', timestamp: '2024-07-17 18:00', lat: 13.819, lon: 100.575 },
    ],
  },
   'BE555555555TH': {
    id: 'BE555555555TH',
    status: 'PENDING',
    history: [
      { status: 'สร้างรายการจัดส่ง', location: 'สาขาภูเก็ต', timestamp: '2024-07-21 10:00', lat: 7.8804, lon: 98.3923 },
    ],
  },
};

export const mockBranches: Branch[] = [
    { id: 1, name: 'BlinkExpress - สำนักงานใหญ่', address: '123 ถนนสาทร, สีลม, บางรัก, กรุงเทพฯ 10500', lat: 13.7278, lon: 100.525, phone: '02-111-1111' },
    { id: 2, name: 'BlinkExpress - สาขาลาดพร้าว', address: '456 ถนนลาดพร้าว, วังทองหลาง, กรุงเทพฯ 10310', lat: 13.819, lon: 100.575, phone: '02-222-2222' },
    { id: 3, name: 'BlinkExpress - สาขานนทบุรี', address: '789 ถนนรัตนาธิเบศร์, เมืองนนทบุรี, นนทบุรี 11000', lat: 13.859, lon: 100.52, phone: '02-333-3333' },
    { id: 4, name: 'BlinkExpress - สาขาเชียงใหม่', address: '101 ถนนนิมมานเหมินท์, เมืองเชียงใหม่, เชียงใหม่ 50200', lat: 18.796, lon: 98.967, phone: '053-444-4444' },
    { id: 5, name: 'BlinkExpress - สาขาภูเก็ต', address: '212 ถนนถลาง, เมืองภูเก็ต, ภูเก็ต 83000', lat: 7.885, lon: 98.39, phone: '076-555-5555' },
    { id: 6, name: 'BlinkExpress - สาขาขอนแก่น', address: '333 ถนนมิตรภาพ, เมืองขอนแก่น, ขอนแก่น 40000', lat: 16.43, lon: 102.83, phone: '043-666-6666' }
];