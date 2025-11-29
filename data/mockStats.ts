// 통계 목업 데이터
export interface MonthlyTrend {
  month: string;
  suspiciousTransactions: number;
  investigations: number;
  caught: number;
  preventedAmount: number; // 차단된 투기 추정액 (억원)
}

export interface RegionRisk {
  region: string;
  riskLevel: 'high' | 'medium' | 'low';
  riskScore: number;
  activeProjects: number;
  flaggedTransactions: number;
}

export interface BeforeAfterComparison {
  metric: string;
  before: number;
  after: number;
  unit: string;
  improvement: string;
}

export interface SystemPerformance {
  system: string;
  accuracy: number;
  responseTime: number; // 초
  coverage: number; // %
  userSatisfaction: number; // %
}

// 월별 투기 의혹 건수 추이 (2025년)
export const monthlyTrends: MonthlyTrend[] = [
  { month: "1월", suspiciousTransactions: 45, investigations: 12, caught: 2, preventedAmount: 85 },
  { month: "2월", suspiciousTransactions: 52, investigations: 15, caught: 3, preventedAmount: 120 },
  { month: "3월", suspiciousTransactions: 48, investigations: 14, caught: 2, preventedAmount: 95 },
  { month: "4월", suspiciousTransactions: 38, investigations: 10, caught: 1, preventedAmount: 45 },
  { month: "5월", suspiciousTransactions: 35, investigations: 9, caught: 2, preventedAmount: 78 },
  { month: "6월", suspiciousTransactions: 28, investigations: 7, caught: 1, preventedAmount: 35 },
  { month: "7월", suspiciousTransactions: 25, investigations: 6, caught: 2, preventedAmount: 62 },
  { month: "8월", suspiciousTransactions: 22, investigations: 5, caught: 1, preventedAmount: 28 },
  { month: "9월", suspiciousTransactions: 18, investigations: 4, caught: 1, preventedAmount: 22 },
  { month: "10월", suspiciousTransactions: 15, investigations: 4, caught: 2, preventedAmount: 55 },
  { month: "11월", suspiciousTransactions: 12, investigations: 3, caught: 1, preventedAmount: 32 }
];

// 지역별 위험도 분포
export const regionRisks: RegionRisk[] = [
  { region: "경기도", riskLevel: "high", riskScore: 78, activeProjects: 5, flaggedTransactions: 45 },
  { region: "인천광역시", riskLevel: "high", riskScore: 72, activeProjects: 2, flaggedTransactions: 28 },
  { region: "대전광역시", riskLevel: "medium", riskScore: 55, activeProjects: 1, flaggedTransactions: 12 },
  { region: "부산광역시", riskLevel: "medium", riskScore: 48, activeProjects: 1, flaggedTransactions: 8 },
  { region: "세종특별자치시", riskLevel: "low", riskScore: 35, activeProjects: 1, flaggedTransactions: 5 },
  { region: "광주광역시", riskLevel: "medium", riskScore: 52, activeProjects: 1, flaggedTransactions: 10 },
  { region: "울산광역시", riskLevel: "low", riskScore: 38, activeProjects: 1, flaggedTransactions: 4 },
  { region: "충청북도", riskLevel: "low", riskScore: 32, activeProjects: 1, flaggedTransactions: 3 },
  { region: "경상남도", riskLevel: "medium", riskScore: 45, activeProjects: 1, flaggedTransactions: 7 },
  { region: "전라북도", riskLevel: "low", riskScore: 28, activeProjects: 1, flaggedTransactions: 2 }
];

// 시스템 도입 전후 비교 (예상)
export const beforeAfterComparison: BeforeAfterComparison[] = [
  {
    metric: "투기 적발 건수",
    before: 3,
    after: 23,
    unit: "건/년",
    improvement: "+667%"
  },
  {
    metric: "평균 탐지 시간",
    before: 45,
    after: 2,
    unit: "일",
    improvement: "-96%"
  },
  {
    metric: "시민 제보 건수",
    before: 120,
    after: 3847,
    unit: "건/년",
    improvement: "+3,106%"
  },
  {
    metric: "정보 공개율",
    before: 25,
    after: 98,
    unit: "%",
    improvement: "+73%p"
  },
  {
    metric: "국민 신뢰도",
    before: 32,
    after: 78,
    unit: "%",
    improvement: "+46%p"
  },
  {
    metric: "투기 차단 금액",
    before: 50,
    after: 657,
    unit: "억원/년",
    improvement: "+1,214%"
  }
];

// 시스템 성능 지표
export const systemPerformance: SystemPerformance[] = [
  {
    system: "LH 글래스박스",
    accuracy: 99.2,
    responseTime: 0.5,
    coverage: 100,
    userSatisfaction: 92
  },
  {
    system: "LH 워치독",
    accuracy: 94.7,
    responseTime: 3.2,
    coverage: 98,
    userSatisfaction: 88
  },
  {
    system: "시민감시단",
    accuracy: 78.5,
    responseTime: 24,
    coverage: 85,
    userSatisfaction: 95
  }
];

// 연도별 비교 데이터
export const yearlyComparison = {
  2021: {
    incidents: 47,
    caught: 23,
    damage: 3200, // 억원
    trustScore: 28
  },
  2022: {
    incidents: 35,
    caught: 18,
    damage: 2100,
    trustScore: 35
  },
  2023: {
    incidents: 28,
    caught: 15,
    damage: 1500,
    trustScore: 42
  },
  2024: {
    incidents: 18,
    caught: 12,
    damage: 800,
    trustScore: 55
  },
  2025: {
    incidents: 8,
    caught: 7,
    damage: 150,
    trustScore: 78
  }
};

// 핵심 KPI
export const keyMetrics = {
  totalProjectsMonitored: 12,
  totalTransactionsAnalyzed: 15847,
  citizenParticipants: 127543,
  investmentPrevented: 657, // 억원
  systemUptime: 99.97,
  avgResponseTime: 2.3, // 초
  citizenReportAccuracy: 78.5,
  aiDetectionAccuracy: 94.7
};

// 해외 벤치마크 비교
export const internationalBenchmark = [
  { country: "대한민국 (LH)", transparency: 78, corruption: 62, digitization: 85 },
  { country: "에스토니아", transparency: 95, corruption: 78, digitization: 98 },
  { country: "싱가포르", transparency: 92, corruption: 85, digitization: 95 },
  { country: "덴마크", transparency: 94, corruption: 88, digitization: 92 },
  { country: "뉴질랜드", transparency: 93, corruption: 87, digitization: 88 }
];

// ROI 분석
export const roiAnalysis = {
  investmentCost: 25, // 억원
  annualBenefit: 125, // 억원
  roi: 400, // %
  paybackPeriod: 0.2, // 년 (약 2.4개월)
  fiveYearBenefit: 625, // 억원
  breakdownOfBenefits: {
    preventedFraud: 65,
    operationalEfficiency: 25,
    citizenTrust: 20,
    legalRiskReduction: 15
  }
};
