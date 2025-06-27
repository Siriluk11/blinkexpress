import { Language } from '../types';

type Translations = {
  [key: string]: { [lang in Language]: string };
};

export const translations: Translations = {
  // General
  appName: { th: 'BlinkExpress', en: 'BlinkExpress', cn: '闪电速递' },
  // Login
  loginTitle: { th: 'เข้าสู่ระบบ', en: 'Login', cn: '登录' },
  emailLabel: { th: 'อีเมล', en: 'Email', cn: '电子邮件' },
  passwordLabel: { th: 'รหัสผ่าน', en: 'Password', cn: '密码' },
  loginButton: { th: 'เข้าสู่ระบบ', en: 'Login', cn: '登录' },
  emailHint: { th: 'ต้องเป็น @gmail.com', en: 'Must be a @gmail.com address', cn: '必须是 @gmail.com 地址' },
  passwordHint: { th: 'ตัวเลข 8 ตัวขึ้นไป', en: '8+ digits required', cn: '8位以上数字' },
  loginError: { th: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง', en: 'Invalid email or password', cn: '无效的电子邮件或密码' },
  // Sidebar
  dashboard: { th: 'แดชบอร์ด', en: 'Dashboard', cn: '仪表板' },
  requestPickup: { th: 'เรียกรถเข้ารับพัสดุ', en: 'Request Pickup', cn: '请求取件' },
  trackParcel: { th: 'ตรวจสอบพัสดุ', en: 'Track Parcel', cn: '追踪包裹' },
  complaints: { th: 'ร้องเรียน & เคลม', en: 'Complaints & Claims', cn: '投诉与索赔' },
  settings: { th: 'ตั้งค่า', en: 'Settings', cn: '设置' },
  logout: { th: 'ออกจากระบบ', en: 'Logout', cn: '登出' },
  findBranch: { th: 'ค้นหาสาขา', en: 'Find a Branch', cn: '查找分店' },
  // Header
  welcome: { th: 'ยินดีต้อนรับ', en: 'Welcome', cn: '欢迎' },
  // Dashboard
  welcomeMessage: { th: 'ยินดีต้อนรับสู่ BlinkExpress!', en: 'Welcome to BlinkExpress!', cn: '欢迎来到闪电速递！' },
  dashboardSubtitle: { th: 'บริการส่งของด่วน รวดเร็ว ปลอดภัย ถึงมือคุณในพริบตา', en: 'Fast, secure, and reliable delivery service at your fingertips.', cn: '快速、安全、可靠的快递服务，触手可及。' },
  // Request Pickup
  pickupTitle: { th: 'เรียกรถเข้ารับพัสดุ', en: 'Request a Parcel Pickup', cn: '请求包裹取件' },
  pickupSubtitle: { th: 'กรอกรายละเอียดเพื่อให้เราไปรับพัสดุถึงหน้าบ้านคุณ', en: 'Fill in the details for us to pick up the parcel at your doorstep.', cn: '请填写详细信息，以便我们上门取件。' },
  fullName: { th: 'ชื่อ-นามสกุล', en: 'Full Name', cn: '全名' },
  phoneNumber: { th: 'เบอร์โทรศัพท์', en: 'Phone Number', cn: '电话号码' },
  address: { th: 'ที่อยู่', en: 'Address', cn: '地址' },
  parcelDetails: { th: 'รายละเอียดพัสดุ', en: 'Parcel Details', cn: '包裹详情' },
  requestButton: { th: 'ส่งคำขอ', en: 'Submit Request', cn: '提交请求' },
  requestSuccess: { th: 'ส่งคำขอสำเร็จ!', en: 'Request submitted successfully!', cn: '请求已成功提交！' },
  requestSuccessMsg: { th: 'เจ้าหน้าที่จะติดต่อกลับเพื่อยืนยันการเข้ารับพัสดุ', en: 'Our staff will contact you shortly to confirm the pickup.', cn: '我们的工作人员会尽快与您联系以确认取件。' },
  // Track Parcel
  trackTitle: { th: 'ตรวจสอบสถานะพัสดุ', en: 'Track Your Parcel', cn: '追踪您的包裹' },
  trackingNumber: { th: 'หมายเลขพัสดุ', en: 'Tracking Number', cn: '追踪号码' },
  trackButton: { th: 'ตรวจสอบ', en: 'Track', cn: '追踪' },
  parcelStatus: { th: 'สถานะพัสดุ', en: 'Parcel Status', cn: '包裹状态' },
  noParcelFound: { th: 'ไม่พบข้อมูลพัสดุ', en: 'Parcel not found', cn: '未找到包裹' },
  status_PENDING: { th: 'รอเข้ารับ', en: 'Pending Pickup', cn: '等待揽收' },
  status_IN_TRANSIT: { th: 'กำลังขนส่ง', en: 'In Transit', cn: '运输中' },
  status_DELIVERED: { th: 'จัดส่งสำเร็จ', en: 'Delivered', cn: '已送达' },
  status_EXCEPTION: { th: 'มีปัญหา', en: 'Exception', cn: '异常' },
  history: { th: 'ประวัติการเดินทาง', en: 'History', cn: '运输历史' },
  lastKnownLocation: { th: 'ตำแหน่งล่าสุดบนแผนที่', en: 'Last Known Location on Map', cn: '地图上的最后已知位置' },
  // Complaints
  complaintsTitle: { th: 'ร้องเรียนและเคลมพัสดุ', en: 'File a Complaint or Claim', cn: '提起投诉或索赔' },
  complaintsSubtitle: { th: 'โปรดระบุปัญหาที่ท่านพบ เราจะรีบดำเนินการแก้ไข', en: 'Please describe the issue you encountered. We will resolve it promptly.', cn: '请描述您遇到的问题，我们将及时处理。' },
  issueType: { th: 'ประเภทของปัญหา', en: 'Issue Type', cn: '问题类型' },
  issueType_damage: { th: 'พัสดุเสียหาย', en: 'Damaged Parcel', cn: '包裹损坏' },
  issueType_lost: { th: 'พัสดุสูญหาย', en: 'Lost Parcel', cn: '包裹丢失' },
  issueType_delay: { th: 'การจัดส่งล่าช้า', en: 'Delivery Delay', cn: '配送延迟' },
  issueType_other: { th: 'อื่นๆ', en: 'Other', cn: '其他' },
  issueDescription: { th: 'รายละเอียดปัญหา', en: 'Description of Issue', cn: '问题描述' },
  uploadPhoto: { th: 'อัปโหลดรูปภาพ (ถ้ามี)', en: 'Upload Photo (optional)', cn: '上传照片（可选）' },
  submitComplaint: { th: 'ส่งเรื่องร้องเรียน', en: 'Submit Complaint', cn: '提交投诉' },
  complaintSuccess: { th: 'ส่งเรื่องร้องเรียนสำเร็จ!', en: 'Complaint submitted successfully!', cn: '投诉已成功提交！' },
  complaintSuccessMsg: { th: 'เราได้รับเรื่องของท่านแล้วและจะติดต่อกลับภายใน 24 ชั่วโมง', en: 'We have received your complaint and will contact you within 24 hours.', cn: '我们已收到您的投诉，并将在24小时内与您联系。' },
  // Settings
  settingsTitle: { th: 'ตั้งค่าโปรไฟล์', en: 'Profile Settings', cn: '个人资料设置' },
  profilePicture: { th: 'รูปโปรไฟล์', en: 'Profile Picture', cn: '头像' },
  changePhoto: { th: 'เปลี่ยนรูปภาพ', en: 'Change Photo', cn: '更换照片' },
  saveChanges: { th: 'บันทึกการเปลี่ยนแปลง', en: 'Save Changes', cn: '保存更改' },
  security: { th: 'ความปลอดภัย', en: 'Security', cn: '安全' },
  changePassword: { th: 'เปลี่ยนรหัสผ่าน', en: 'Change Password', cn: '更改密码' },
  currentPassword: { th: 'รหัสผ่านปัจจุบัน', en: 'Current Password', cn: '当前密码' },
  newPassword: { th: 'รหัสผ่านใหม่', en: 'New Password', cn: '新密码' },
  confirmNewPassword: { th: 'ยืนยันรหัสผ่านใหม่', en: 'Confirm New Password', cn: '确认新密码' },
  updatePassword: { th: 'อัปเดตรหัสผ่าน', en: 'Update Password', cn: '更新密码' },
  passwordUpdateSuccess: { th: 'อัปเดตรหัสผ่านสำเร็จ!', en: 'Password updated successfully!', cn: '密码更新成功！' },
  // Find Branch
  findBranchTitle: { th: 'ค้นหาสาขาใกล้บ้านคุณ', en: 'Find a Branch Near You', cn: '查找您附近的分店' },
  findBranchSubtitle: { th: 'ดูสาขาทั้งหมดของเราบนแผนที่', en: 'View all our branches on the map', cn: '在地图上查看我们所有的分店' },
  branchList: { th: 'รายชื่อสาขา', en: 'Branch List', cn: '分店列表' },
  findNearMe: { th: 'ค้นหาใกล้ฉัน', en: 'Find Near Me', cn: '查找附近' },
  gettingLocation: { th: 'กำลังระบุตำแหน่งของคุณ...', en: 'Getting your location...', cn: '正在获取您的位置...' },
  locationError: { th: 'ไม่สามารถระบุตำแหน่งได้', en: 'Could not get location', cn: '无法获取位置' },
  openInGoogleMaps: { th: 'เปิดใน Google Maps', en: 'Open in Google Maps', cn: '在谷歌地图中打开' },
  yourLocation: { th: 'ตำแหน่งของคุณ', en: 'Your Location', cn: '你的地点' }
};