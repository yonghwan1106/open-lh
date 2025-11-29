// 시민감시단 목업 데이터
export interface CitizenStats {
  totalMembers: number;
  totalReports: number;
  successfulCatches: number;
  totalRewards: number; // 총 포상금 (원)
  monthlyGrowth: number; // 전월 대비 가입자 증가율 (%)
  activeMembers: number; // 이번달 활동 회원수
}

export interface UserProfile {
  id: number;
  name: string;
  nickname: string;
  points: number;
  rank: number;
  level: string;
  reports: number;
  successfulReports: number;
  watchAreas: WatchArea[];
  joinDate: string;
  badges: Badge[];
  pointHistory: PointHistory[];
}

export interface WatchArea {
  id: number;
  name: string;
  region: string;
  notifications: boolean;
  addedDate: string;
}

export interface Badge {
  id: number;
  name: string;
  description: string;
  icon: string;
  earnedDate: string;
}

export interface PointHistory {
  id: number;
  date: string;
  type: '적립' | '사용';
  amount: number;
  description: string;
}

export interface Report {
  id: number;
  date: string;
  location: string;
  content: string;
  status: '접수됨' | '검토중' | '조사중' | '처리완료' | '반려';
  category: string;
  attachments: number;
  reward?: number;
}

export interface TopReporter {
  rank: number;
  nickname: string;
  reports: number;
  successfulCatches: number;
  points: number;
  level: string;
}

export interface RegionRanking {
  rank: number;
  region: string;
  members: number;
  reports: number;
  participationRate: number;
}

// 전체 통계
export const citizenStats: CitizenStats = {
  totalMembers: 127543,
  totalReports: 3847,
  successfulCatches: 23,
  totalRewards: 1250000000, // 12.5억원
  monthlyGrowth: 12.5,
  activeMembers: 45230
};

// 사용자 프로필
export const myProfile: UserProfile = {
  id: 1,
  name: "홍길동",
  nickname: "투명감시자",
  points: 2350,
  rank: 1247,
  level: "골드",
  reports: 5,
  successfulReports: 1,
  watchAreas: [
    { id: 1, name: "화성시 동탄동", region: "경기도", notifications: true, addedDate: "2025-08-15" },
    { id: 2, name: "용인시 처인구", region: "경기도", notifications: true, addedDate: "2025-09-20" },
    { id: 3, name: "수원시 권선구", region: "경기도", notifications: false, addedDate: "2025-11-01" }
  ],
  joinDate: "2025-06-10",
  badges: [
    { id: 1, name: "첫 제보", description: "첫 번째 제보를 완료했습니다", icon: "flag", earnedDate: "2025-07-01" },
    { id: 2, name: "정의의 눈", description: "의심거래 적발에 기여했습니다", icon: "eye", earnedDate: "2025-09-15" },
    { id: 3, name: "꾸준한 감시자", description: "3개월 연속 활동했습니다", icon: "shield", earnedDate: "2025-11-10" }
  ],
  pointHistory: [
    { id: 1, date: "2025-11-28", type: "적립", amount: 500, description: "적발 기여 보상" },
    { id: 2, date: "2025-11-25", type: "적립", amount: 100, description: "제보 접수 보상" },
    { id: 3, date: "2025-11-20", type: "적립", amount: 50, description: "출석 체크 보상" },
    { id: 4, date: "2025-11-15", type: "적립", amount: 100, description: "제보 접수 보상" },
    { id: 5, date: "2025-11-10", type: "적립", amount: 200, description: "3개월 연속 활동 보너스" },
    { id: 6, date: "2025-11-05", type: "사용", amount: -500, description: "기프티콘 교환" },
    { id: 7, date: "2025-10-28", type: "적립", amount: 100, description: "제보 접수 보상" },
    { id: 8, date: "2025-10-20", type: "적립", amount: 1000, description: "조사 진행 보상" }
  ]
};

// 내 제보 내역
export const myReports: Report[] = [
  {
    id: 1,
    date: "2025-11-25",
    location: "화성시 동탄면 목리",
    content: "개발예정지 인근 대규모 토지거래 의심. 최근 3개월간 동일 지역 연속 거래 확인.",
    status: "조사중",
    category: "토지거래 의심",
    attachments: 2,
    reward: undefined
  },
  {
    id: 2,
    date: "2025-11-15",
    location: "용인시 처인구 모현읍",
    content: "LH 직원 가족 명의 토지 매입 의혹 제보",
    status: "검토중",
    category: "내부자 거래 의심",
    attachments: 1,
    reward: undefined
  },
  {
    id: 3,
    date: "2025-09-10",
    location: "화성시 동탄면 석우리",
    content: "개발 발표 직전 급격한 토지 매입 정황 발견",
    status: "처리완료",
    category: "사전 정보 이용 의심",
    attachments: 3,
    reward: 500000
  },
  {
    id: 4,
    date: "2025-08-20",
    location: "수원시 권선구 호매실동",
    content: "신규 개발지구 인근 비정상 거래 패턴 신고",
    status: "반려",
    category: "토지거래 의심",
    attachments: 1,
    reward: undefined
  },
  {
    id: 5,
    date: "2025-07-01",
    location: "화성시 동탄면",
    content: "첫 번째 테스트 제보",
    status: "처리완료",
    category: "기타",
    attachments: 0,
    reward: 10000
  }
];

// 이달의 TOP 10 시민감시단
export const topReporters: TopReporter[] = [
  { rank: 1, nickname: "정의수호자", reports: 28, successfulCatches: 5, points: 15200, level: "다이아몬드" },
  { rank: 2, nickname: "땅지킴이", reports: 24, successfulCatches: 4, points: 12800, level: "다이아몬드" },
  { rank: 3, nickname: "시민의눈", reports: 22, successfulCatches: 3, points: 10500, level: "플래티넘" },
  { rank: 4, nickname: "투명LH응원단", reports: 19, successfulCatches: 3, points: 9200, level: "플래티넘" },
  { rank: 5, nickname: "부동산파수꾼", reports: 18, successfulCatches: 2, points: 8100, level: "플래티넘" },
  { rank: 6, nickname: "깨끗한대한민국", reports: 16, successfulCatches: 2, points: 7500, level: "골드" },
  { rank: 7, nickname: "감시자007", reports: 15, successfulCatches: 2, points: 7200, level: "골드" },
  { rank: 8, nickname: "청렴시민", reports: 14, successfulCatches: 1, points: 6800, level: "골드" },
  { rank: 9, nickname: "공정지킴이", reports: 13, successfulCatches: 1, points: 6200, level: "골드" },
  { rank: 10, nickname: "투명한내일", reports: 12, successfulCatches: 1, points: 5900, level: "실버" }
];

// 지역별 참여율 순위
export const regionRankings: RegionRanking[] = [
  { rank: 1, region: "경기도", members: 42150, reports: 1245, participationRate: 2.95 },
  { rank: 2, region: "서울특별시", members: 28340, reports: 756, participationRate: 2.67 },
  { rank: 3, region: "인천광역시", members: 12890, reports: 412, participationRate: 3.20 },
  { rank: 4, region: "부산광역시", members: 9870, reports: 298, participationRate: 3.02 },
  { rank: 5, region: "대전광역시", members: 6540, reports: 187, participationRate: 2.86 },
  { rank: 6, region: "대구광역시", members: 5890, reports: 165, participationRate: 2.80 },
  { rank: 7, region: "광주광역시", members: 4560, reports: 134, participationRate: 2.94 },
  { rank: 8, region: "세종특별자치시", members: 3210, reports: 112, participationRate: 3.49 },
  { rank: 9, region: "울산광역시", members: 2890, reports: 87, participationRate: 3.01 },
  { rank: 10, region: "충청남도", members: 2780, reports: 78, participationRate: 2.81 }
];

// 제보 카테고리
export const reportCategories = [
  { id: 1, name: "토지거래 의심", description: "개발예정지 인근 의심스러운 토지 거래" },
  { id: 2, name: "내부자 거래 의심", description: "LH 직원 또는 관계자의 부정 거래 의심" },
  { id: 3, name: "사전 정보 이용 의심", description: "미공개 정보를 이용한 거래 의심" },
  { id: 4, name: "허위 서류 의심", description: "거래 서류 위조 또는 변조 의심" },
  { id: 5, name: "기타", description: "기타 부정행위 또는 비리 제보" }
];

// 레벨 설정
export const levelConfig = {
  브론즈: { min: 0, max: 999, color: '#CD7F32', benefits: ['기본 제보 기능'] },
  실버: { min: 1000, max: 2999, color: '#C0C0C0', benefits: ['기본 제보 기능', '알림 설정 3개'] },
  골드: { min: 3000, max: 6999, color: '#FFD700', benefits: ['기본 제보 기능', '알림 설정 5개', '청약 가점 0.5점'] },
  플래티넘: { min: 7000, max: 11999, color: '#E5E4E2', benefits: ['기본 제보 기능', '알림 설정 10개', '청약 가점 1점', '우선 분양 정보'] },
  다이아몬드: { min: 12000, max: Infinity, color: '#B9F2FF', benefits: ['전체 기능', '무제한 알림', '청약 가점 2점', 'VIP 분양 설명회 초대'] }
};

// 혜택 안내
export const benefits = [
  {
    title: "청약 가점",
    description: "시민감시단 활동 점수에 따라 청약 가점 최대 2점 부여",
    icon: "home",
    levels: { 골드: "0.5점", 플래티넘: "1점", 다이아몬드: "2점" }
  },
  {
    title: "우선 분양 정보",
    description: "신규 분양 정보 우선 안내 및 사전 청약 기회",
    icon: "bell",
    levels: { 플래티넘: "제공", 다이아몬드: "VIP 제공" }
  },
  {
    title: "포인트 전환",
    description: "적립 포인트로 기프티콘, 상품권 등 교환 가능",
    icon: "gift",
    levels: { 전체: "포인트당 1원 가치" }
  },
  {
    title: "적발 기여 포상금",
    description: "제보로 실제 투기 적발 시 최대 1억원 포상금",
    icon: "cash",
    levels: { 전체: "적발액의 5% (최대 1억원)" }
  }
];

// 상태 색상
export const reportStatusConfig = {
  '접수됨': { color: '#6B7280', bgColor: '#F3F4F6' },
  '검토중': { color: '#F59E0B', bgColor: '#FEF3C7' },
  '조사중': { color: '#3B82F6', bgColor: '#DBEAFE' },
  '처리완료': { color: '#10B981', bgColor: '#D1FAE5' },
  '반려': { color: '#EF4444', bgColor: '#FEE2E2' }
};
