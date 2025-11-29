// 이상거래 탐지 목업 데이터
export interface Transaction {
  id: number;
  date: string;
  time: string;
  location: string;
  address: string;
  amount: string;
  amountValue: number;
  riskScore: number;
  scores: {
    distance: number; // 개발예정지와의 거리 (30점 만점)
    timing: number;   // 정보공개 전 거래시점 (30점 만점)
    amount: number;   // 거래금액 이상 여부 (20점 만점)
    network: number;  // 관계자 연결망 (20점 만점)
  };
  status: '정상' | '주의' | '경고' | '조사중' | '적발';
  relatedProject: string;
  buyerType: string;
  sellerType: string;
  landType: string;
  area: number; // 면적 (㎡)
}

export interface DailyStats {
  date: string;
  totalTransactions: number;
  flaggedTransactions: number;
  investigationStarted: number;
  caughtCases: number;
}

export const transactions: Transaction[] = [
  {
    id: 1,
    date: "2025-11-28",
    time: "14:23",
    location: "화성시 동탄면",
    address: "경기도 화성시 동탄면 목리 산 45-2",
    amount: "8억 2천만원",
    amountValue: 820000000,
    riskScore: 78,
    scores: { distance: 28, timing: 25, amount: 15, network: 10 },
    status: "조사중",
    relatedProject: "화성동탄3지구",
    buyerType: "개인",
    sellerType: "법인",
    landType: "임야",
    area: 2850
  },
  {
    id: 2,
    date: "2025-11-28",
    time: "11:05",
    location: "인천 서구 검단동",
    address: "인천광역시 서구 검단동 234-7",
    amount: "5억 8천만원",
    amountValue: 580000000,
    riskScore: 85,
    scores: { distance: 30, timing: 28, amount: 17, network: 10 },
    status: "적발",
    relatedProject: "인천검단2지구",
    buyerType: "법인",
    sellerType: "개인",
    landType: "전",
    area: 1650
  },
  {
    id: 3,
    date: "2025-11-27",
    time: "16:42",
    location: "남양주시 진접읍",
    address: "경기도 남양주시 진접읍 장현리 178",
    amount: "3억 5천만원",
    amountValue: 350000000,
    riskScore: 62,
    scores: { distance: 22, timing: 18, amount: 12, network: 10 },
    status: "주의",
    relatedProject: "남양주왕숙2지구",
    buyerType: "개인",
    sellerType: "개인",
    landType: "답",
    area: 990
  },
  {
    id: 4,
    date: "2025-11-27",
    time: "10:18",
    location: "화성시 동탄면",
    address: "경기도 화성시 동탄면 방교리 567-3",
    amount: "12억 4천만원",
    amountValue: 1240000000,
    riskScore: 92,
    scores: { distance: 30, timing: 30, amount: 18, network: 14 },
    status: "조사중",
    relatedProject: "화성동탄3지구",
    buyerType: "법인",
    sellerType: "개인",
    landType: "임야",
    area: 4200
  },
  {
    id: 5,
    date: "2025-11-26",
    time: "09:30",
    location: "대전 서구 도안동",
    address: "대전광역시 서구 도안동 산 23-1",
    amount: "4억 7천만원",
    amountValue: 470000000,
    riskScore: 55,
    scores: { distance: 18, timing: 15, amount: 12, network: 10 },
    status: "주의",
    relatedProject: "대전도안2지구",
    buyerType: "개인",
    sellerType: "법인",
    landType: "전",
    area: 1320
  },
  {
    id: 6,
    date: "2025-11-26",
    time: "15:55",
    location: "세종시 5-1생활권",
    address: "세종특별자치시 조치원읍 침산리 89",
    amount: "2억 1천만원",
    amountValue: 210000000,
    riskScore: 35,
    scores: { distance: 10, timing: 12, amount: 8, network: 5 },
    status: "정상",
    relatedProject: "세종5-1생활권",
    buyerType: "개인",
    sellerType: "개인",
    landType: "대지",
    area: 580
  },
  {
    id: 7,
    date: "2025-11-25",
    time: "14:20",
    location: "광주 광산구 송정동",
    address: "광주광역시 광산구 송정동 456-12",
    amount: "6억 3천만원",
    amountValue: 630000000,
    riskScore: 71,
    scores: { distance: 25, timing: 22, amount: 14, network: 10 },
    status: "경고",
    relatedProject: "광주송정역세권",
    buyerType: "법인",
    sellerType: "개인",
    landType: "잡종지",
    area: 1890
  },
  {
    id: 8,
    date: "2025-11-25",
    time: "11:45",
    location: "울산 중구 약사동",
    address: "울산광역시 중구 약사동 산 12-5",
    amount: "3억 9천만원",
    amountValue: 390000000,
    riskScore: 48,
    scores: { distance: 15, timing: 14, amount: 10, network: 9 },
    status: "정상",
    relatedProject: "울산혁신도시확장",
    buyerType: "개인",
    sellerType: "개인",
    landType: "임야",
    area: 1100
  },
  {
    id: 9,
    date: "2025-11-24",
    time: "16:30",
    location: "창원시 의창구",
    address: "경상남도 창원시 의창구 명서동 789-2",
    amount: "7억 8천만원",
    amountValue: 780000000,
    riskScore: 67,
    scores: { distance: 22, timing: 20, amount: 15, network: 10 },
    status: "주의",
    relatedProject: "창원명서지구",
    buyerType: "법인",
    sellerType: "법인",
    landType: "전",
    area: 2150
  },
  {
    id: 10,
    date: "2025-11-24",
    time: "09:15",
    location: "수원시 권선구",
    address: "경기도 수원시 권선구 호매실동 234",
    amount: "4억 2천만원",
    amountValue: 420000000,
    riskScore: 58,
    scores: { distance: 20, timing: 16, amount: 12, network: 10 },
    status: "주의",
    relatedProject: "수원호매실3지구",
    buyerType: "개인",
    sellerType: "개인",
    landType: "답",
    area: 1180
  },
  {
    id: 11,
    date: "2025-11-23",
    time: "13:40",
    location: "청주시 흥덕구",
    address: "충청북도 청주시 흥덕구 강내면 산 56-7",
    amount: "2억 8천만원",
    amountValue: 280000000,
    riskScore: 42,
    scores: { distance: 12, timing: 14, amount: 10, network: 6 },
    status: "정상",
    relatedProject: "청주테크노폴리스2",
    buyerType: "개인",
    sellerType: "법인",
    landType: "임야",
    area: 850
  },
  {
    id: 12,
    date: "2025-11-23",
    time: "10:25",
    location: "전주시 덕진구",
    address: "전라북도 전주시 덕진구 송천동 123-4",
    amount: "5억 1천만원",
    amountValue: 510000000,
    riskScore: 38,
    scores: { distance: 10, timing: 12, amount: 10, network: 6 },
    status: "정상",
    relatedProject: "전주에코시티",
    buyerType: "개인",
    sellerType: "개인",
    landType: "대지",
    area: 1420
  },
  {
    id: 13,
    date: "2025-11-22",
    time: "15:10",
    location: "화성시 동탄면",
    address: "경기도 화성시 동탄면 석우리 산 78-9",
    amount: "15억 2천만원",
    amountValue: 1520000000,
    riskScore: 95,
    scores: { distance: 30, timing: 30, amount: 20, network: 15 },
    status: "적발",
    relatedProject: "화성동탄3지구",
    buyerType: "법인",
    sellerType: "개인",
    landType: "임야",
    area: 5200
  },
  {
    id: 14,
    date: "2025-11-22",
    time: "11:35",
    location: "부산 강서구 명지동",
    address: "부산광역시 강서구 명지동 456-78",
    amount: "3억 2천만원",
    amountValue: 320000000,
    riskScore: 32,
    scores: { distance: 8, timing: 10, amount: 8, network: 6 },
    status: "정상",
    relatedProject: "부산강서신도시",
    buyerType: "개인",
    sellerType: "개인",
    landType: "전",
    area: 900
  },
  {
    id: 15,
    date: "2025-11-21",
    time: "14:50",
    location: "인천 서구 검단동",
    address: "인천광역시 서구 검단동 산 45-6",
    amount: "9억 7천만원",
    amountValue: 970000000,
    riskScore: 88,
    scores: { distance: 30, timing: 28, amount: 18, network: 12 },
    status: "조사중",
    relatedProject: "인천검단2지구",
    buyerType: "법인",
    sellerType: "법인",
    landType: "임야",
    area: 3100
  },
  {
    id: 16,
    date: "2025-11-21",
    time: "09:20",
    location: "남양주시 진접읍",
    address: "경기도 남양주시 진접읍 팔야리 234-5",
    amount: "4억 5천만원",
    amountValue: 450000000,
    riskScore: 73,
    scores: { distance: 26, timing: 22, amount: 15, network: 10 },
    status: "경고",
    relatedProject: "남양주왕숙2지구",
    buyerType: "개인",
    sellerType: "법인",
    landType: "답",
    area: 1280
  },
  {
    id: 17,
    date: "2025-11-20",
    time: "16:05",
    location: "대전 서구 도안동",
    address: "대전광역시 서구 도안동 567-89",
    amount: "6억 8천만원",
    amountValue: 680000000,
    riskScore: 65,
    scores: { distance: 22, timing: 20, amount: 13, network: 10 },
    status: "주의",
    relatedProject: "대전도안2지구",
    buyerType: "법인",
    sellerType: "개인",
    landType: "전",
    area: 1920
  },
  {
    id: 18,
    date: "2025-11-20",
    time: "10:40",
    location: "광주 광산구 송정동",
    address: "광주광역시 광산구 송정동 789-12",
    amount: "8억 4천만원",
    amountValue: 840000000,
    riskScore: 82,
    scores: { distance: 28, timing: 26, amount: 16, network: 12 },
    status: "조사중",
    relatedProject: "광주송정역세권",
    buyerType: "법인",
    sellerType: "개인",
    landType: "잡종지",
    area: 2450
  },
  {
    id: 19,
    date: "2025-11-19",
    time: "13:25",
    location: "창원시 의창구",
    address: "경상남도 창원시 의창구 명서동 산 34-5",
    amount: "5억 6천만원",
    amountValue: 560000000,
    riskScore: 59,
    scores: { distance: 19, timing: 18, amount: 12, network: 10 },
    status: "주의",
    relatedProject: "창원명서지구",
    buyerType: "개인",
    sellerType: "법인",
    landType: "임야",
    area: 1580
  },
  {
    id: 20,
    date: "2025-11-19",
    time: "09:55",
    location: "수원시 권선구",
    address: "경기도 수원시 권선구 호매실동 456-7",
    amount: "3억 8천만원",
    amountValue: 380000000,
    riskScore: 45,
    scores: { distance: 14, timing: 14, amount: 10, network: 7 },
    status: "정상",
    relatedProject: "수원호매실3지구",
    buyerType: "개인",
    sellerType: "개인",
    landType: "전",
    area: 1050
  }
];

// 일별 통계
export const dailyStats: DailyStats[] = [
  { date: "2025-11-29", totalTransactions: 156, flaggedTransactions: 12, investigationStarted: 3, caughtCases: 0 },
  { date: "2025-11-28", totalTransactions: 189, flaggedTransactions: 18, investigationStarted: 5, caughtCases: 1 },
  { date: "2025-11-27", totalTransactions: 167, flaggedTransactions: 14, investigationStarted: 4, caughtCases: 0 },
  { date: "2025-11-26", totalTransactions: 145, flaggedTransactions: 11, investigationStarted: 2, caughtCases: 0 },
  { date: "2025-11-25", totalTransactions: 178, flaggedTransactions: 15, investigationStarted: 4, caughtCases: 1 },
  { date: "2025-11-24", totalTransactions: 134, flaggedTransactions: 9, investigationStarted: 2, caughtCases: 0 },
  { date: "2025-11-23", totalTransactions: 112, flaggedTransactions: 7, investigationStarted: 1, caughtCases: 0 },
];

// 오늘의 핵심 수치
export const todayMetrics = {
  totalTransactions: 156,
  flaggedCount: 12,
  highRiskCount: 4,
  investigationCount: 3,
  caughtToday: 0,
  avgRiskScore: 54.2,
  monitoredProjects: 12,
  activeAlerts: 8
};

// 위험도 색상 설정
export const getRiskColor = (score: number) => {
  if (score >= 70) return { color: '#EF4444', bgColor: '#FEE2E2', label: '고위험' };
  if (score >= 50) return { color: '#F59E0B', bgColor: '#FEF3C7', label: '주의' };
  return { color: '#10B981', bgColor: '#D1FAE5', label: '정상' };
};

// 상태 색상 설정
export const statusConfig = {
  '정상': { color: '#10B981', bgColor: '#D1FAE5' },
  '주의': { color: '#F59E0B', bgColor: '#FEF3C7' },
  '경고': { color: '#F97316', bgColor: '#FFEDD5' },
  '조사중': { color: '#3B82F6', bgColor: '#DBEAFE' },
  '적발': { color: '#EF4444', bgColor: '#FEE2E2' },
};
