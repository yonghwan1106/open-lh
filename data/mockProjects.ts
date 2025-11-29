// 개발사업 목업 데이터
export interface Project {
  id: number;
  name: string;
  region: string;
  stage: '검토중' | '조사중' | '심의중' | '승인';
  progress: number;
  startDate: string;
  expectedEndDate: string;
  area: number; // 면적 (만㎡)
  budget: number; // 예산 (억원)
  households: number; // 세대수
  documents: Document[];
  timeline: TimelineEvent[];
  coordinates: { lat: number; lng: number };
}

export interface Document {
  id: number;
  name: string;
  type: 'PDF' | 'HWP' | 'XLSX';
  date: string;
  size: string;
}

export interface TimelineEvent {
  id: number;
  date: string;
  time: string;
  stage: string;
  action: string;
  officer: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "화성동탄3지구",
    region: "경기도 화성시 동탄면",
    stage: "심의중",
    progress: 75,
    startDate: "2024-03-15",
    expectedEndDate: "2027-06-30",
    area: 1124,
    budget: 85000,
    households: 28000,
    coordinates: { lat: 37.2006, lng: 127.0980 },
    documents: [
      { id: 1, name: "사업계획서_v3.pdf", type: "PDF", date: "2025-11-25", size: "15.2MB" },
      { id: 2, name: "환경영향평가보고서.pdf", type: "PDF", date: "2025-11-20", size: "45.8MB" },
      { id: 3, name: "주민설명회자료.pdf", type: "PDF", date: "2025-11-15", size: "8.3MB" },
    ],
    timeline: [
      { id: 1, date: "2025-11-28", time: "14:30", stage: "심의중", action: "도시계획위원회 상정", officer: "심의관 K**" },
      { id: 2, date: "2025-11-25", time: "10:00", stage: "심의중", action: "최종 검토 완료", officer: "팀장 L**" },
      { id: 3, date: "2025-11-20", time: "16:45", stage: "조사중", action: "환경영향평가 승인", officer: "과장 P**" },
    ]
  },
  {
    id: 2,
    name: "인천검단2지구",
    region: "인천광역시 서구 검단동",
    stage: "조사중",
    progress: 45,
    startDate: "2024-06-01",
    expectedEndDate: "2028-12-31",
    area: 892,
    budget: 62000,
    households: 21000,
    coordinates: { lat: 37.6042, lng: 126.7461 },
    documents: [
      { id: 1, name: "사업계획서_v2.pdf", type: "PDF", date: "2025-11-22", size: "12.1MB" },
      { id: 2, name: "지질조사보고서.pdf", type: "PDF", date: "2025-11-18", size: "28.4MB" },
    ],
    timeline: [
      { id: 1, date: "2025-11-27", time: "11:20", stage: "조사중", action: "지질조사 착수", officer: "연구원 C**" },
      { id: 2, date: "2025-11-22", time: "09:30", stage: "조사중", action: "현장조사 완료", officer: "팀장 H**" },
    ]
  },
  {
    id: 3,
    name: "남양주왕숙2지구",
    region: "경기도 남양주시 진접읍",
    stage: "검토중",
    progress: 20,
    startDate: "2025-01-15",
    expectedEndDate: "2029-06-30",
    area: 756,
    budget: 48000,
    households: 18500,
    coordinates: { lat: 37.6846, lng: 127.1880 },
    documents: [
      { id: 1, name: "사업제안서.pdf", type: "PDF", date: "2025-11-15", size: "8.7MB" },
    ],
    timeline: [
      { id: 1, date: "2025-11-26", time: "15:00", stage: "검토중", action: "초기 타당성 검토", officer: "대리 M**" },
    ]
  },
  {
    id: 4,
    name: "부산강서신도시",
    region: "부산광역시 강서구 명지동",
    stage: "승인",
    progress: 100,
    startDate: "2023-09-01",
    expectedEndDate: "2026-12-31",
    area: 534,
    budget: 38000,
    households: 15000,
    coordinates: { lat: 35.0894, lng: 128.9327 },
    documents: [
      { id: 1, name: "최종승인서.pdf", type: "PDF", date: "2025-10-30", size: "5.2MB" },
      { id: 2, name: "착공신고서.pdf", type: "PDF", date: "2025-11-05", size: "3.8MB" },
    ],
    timeline: [
      { id: 1, date: "2025-11-05", time: "10:00", stage: "승인", action: "착공 신고 완료", officer: "본부장 S**" },
      { id: 2, date: "2025-10-30", time: "14:00", stage: "승인", action: "사업 최종 승인", officer: "사장 K**" },
    ]
  },
  {
    id: 5,
    name: "대전도안2지구",
    region: "대전광역시 서구 도안동",
    stage: "심의중",
    progress: 68,
    startDate: "2024-04-20",
    expectedEndDate: "2027-09-30",
    area: 445,
    budget: 32000,
    households: 12000,
    coordinates: { lat: 36.3141, lng: 127.3523 },
    documents: [
      { id: 1, name: "사업계획서_수정.pdf", type: "PDF", date: "2025-11-24", size: "11.5MB" },
    ],
    timeline: [
      { id: 1, date: "2025-11-28", time: "09:00", stage: "심의중", action: "보완자료 제출", officer: "팀장 J**" },
    ]
  },
  {
    id: 6,
    name: "광주송정역세권",
    region: "광주광역시 광산구 송정동",
    stage: "조사중",
    progress: 38,
    startDate: "2024-08-10",
    expectedEndDate: "2028-03-31",
    area: 287,
    budget: 21000,
    households: 8500,
    coordinates: { lat: 35.1392, lng: 126.7927 },
    documents: [
      { id: 1, name: "역세권개발계획.pdf", type: "PDF", date: "2025-11-20", size: "9.8MB" },
    ],
    timeline: [
      { id: 1, date: "2025-11-25", time: "13:30", stage: "조사중", action: "교통영향평가 착수", officer: "연구원 Y**" },
    ]
  },
  {
    id: 7,
    name: "세종5-1생활권",
    region: "세종특별자치시 5-1생활권",
    stage: "승인",
    progress: 100,
    startDate: "2023-05-01",
    expectedEndDate: "2026-06-30",
    area: 623,
    budget: 45000,
    households: 16500,
    coordinates: { lat: 36.4800, lng: 127.2890 },
    documents: [
      { id: 1, name: "사업승인서.pdf", type: "PDF", date: "2025-09-15", size: "4.5MB" },
      { id: 2, name: "실시설계도서.pdf", type: "PDF", date: "2025-10-20", size: "125.3MB" },
    ],
    timeline: [
      { id: 1, date: "2025-10-20", time: "16:00", stage: "승인", action: "실시설계 승인", officer: "본부장 O**" },
    ]
  },
  {
    id: 8,
    name: "청주테크노폴리스2",
    region: "충청북도 청주시 흥덕구",
    stage: "검토중",
    progress: 15,
    startDate: "2025-02-01",
    expectedEndDate: "2029-12-31",
    area: 412,
    budget: 28000,
    households: 9800,
    coordinates: { lat: 36.6358, lng: 127.4914 },
    documents: [
      { id: 1, name: "사업제안서_초안.pdf", type: "PDF", date: "2025-11-10", size: "6.2MB" },
    ],
    timeline: [
      { id: 1, date: "2025-11-20", time: "10:30", stage: "검토중", action: "사전 타당성 조사 시작", officer: "대리 B**" },
    ]
  },
  {
    id: 9,
    name: "울산혁신도시확장",
    region: "울산광역시 중구 약사동",
    stage: "심의중",
    progress: 82,
    startDate: "2024-01-10",
    expectedEndDate: "2027-03-31",
    area: 198,
    budget: 15000,
    households: 5200,
    coordinates: { lat: 35.5537, lng: 129.2560 },
    documents: [
      { id: 1, name: "확장계획서.pdf", type: "PDF", date: "2025-11-26", size: "14.7MB" },
      { id: 2, name: "환경영향평가.pdf", type: "PDF", date: "2025-11-22", size: "38.2MB" },
    ],
    timeline: [
      { id: 1, date: "2025-11-28", time: "11:00", stage: "심의중", action: "최종심의 예정", officer: "과장 N**" },
    ]
  },
  {
    id: 10,
    name: "창원명서지구",
    region: "경상남도 창원시 의창구",
    stage: "조사중",
    progress: 55,
    startDate: "2024-05-15",
    expectedEndDate: "2028-06-30",
    area: 356,
    budget: 25000,
    households: 11000,
    coordinates: { lat: 35.2281, lng: 128.6811 },
    documents: [
      { id: 1, name: "사업계획서.pdf", type: "PDF", date: "2025-11-23", size: "10.3MB" },
    ],
    timeline: [
      { id: 1, date: "2025-11-27", time: "14:00", stage: "조사중", action: "현장조사 진행중", officer: "연구원 T**" },
    ]
  },
  {
    id: 11,
    name: "수원호매실3지구",
    region: "경기도 수원시 권선구",
    stage: "검토중",
    progress: 28,
    startDate: "2024-11-01",
    expectedEndDate: "2029-09-30",
    area: 278,
    budget: 19500,
    households: 7800,
    coordinates: { lat: 37.2700, lng: 126.9627 },
    documents: [
      { id: 1, name: "사업구상안.pdf", type: "PDF", date: "2025-11-18", size: "7.1MB" },
    ],
    timeline: [
      { id: 1, date: "2025-11-24", time: "16:30", stage: "검토중", action: "관계기관 협의 시작", officer: "팀장 W**" },
    ]
  },
  {
    id: 12,
    name: "전주에코시티",
    region: "전라북도 전주시 덕진구",
    stage: "승인",
    progress: 100,
    startDate: "2023-07-20",
    expectedEndDate: "2026-09-30",
    area: 512,
    budget: 36000,
    households: 14200,
    coordinates: { lat: 35.8468, lng: 127.1297 },
    documents: [
      { id: 1, name: "최종승인서.pdf", type: "PDF", date: "2025-08-30", size: "4.8MB" },
    ],
    timeline: [
      { id: 1, date: "2025-11-01", time: "09:00", stage: "승인", action: "1단계 분양 시작", officer: "본부장 R**" },
    ]
  }
];

// 실시간 피드용 최근 활동 데이터
export const recentActivities: TimelineEvent[] = [
  { id: 1, date: "2025-11-29", time: "09:15", stage: "심의중", action: "화성동탄3지구 위원회 심의 착수", officer: "심의관 K**" },
  { id: 2, date: "2025-11-29", time: "08:45", stage: "조사중", action: "창원명서지구 환경조사 보고서 접수", officer: "연구원 T**" },
  { id: 3, date: "2025-11-29", time: "08:30", stage: "검토중", action: "수원호매실3지구 관계기관 회신 도착", officer: "팀장 W**" },
  { id: 4, date: "2025-11-28", time: "17:30", stage: "심의중", action: "울산혁신도시확장 심의자료 보완", officer: "과장 N**" },
  { id: 5, date: "2025-11-28", time: "16:00", stage: "조사중", action: "인천검단2지구 지반조사 중간보고", officer: "연구원 C**" },
  { id: 6, date: "2025-11-28", time: "14:30", stage: "심의중", action: "대전도안2지구 교통심의 통과", officer: "팀장 J**" },
  { id: 7, date: "2025-11-28", time: "11:00", stage: "검토중", action: "청주테크노폴리스2 예비타당성 검토", officer: "대리 B**" },
  { id: 8, date: "2025-11-28", time: "09:30", stage: "승인", action: "부산강서신도시 공정률 25% 달성", officer: "현장소장 A**" },
];

// 단계별 색상 및 상태
export const stageConfig = {
  '검토중': { color: '#F59E0B', bgColor: '#FEF3C7', label: '검토중' },
  '조사중': { color: '#F97316', bgColor: '#FFEDD5', label: '조사중' },
  '심의중': { color: '#EF4444', bgColor: '#FEE2E2', label: '심의중' },
  '승인': { color: '#10B981', bgColor: '#D1FAE5', label: '승인완료' },
};

export const getStageColor = (stage: string) => stageConfig[stage as keyof typeof stageConfig] || stageConfig['검토중'];
