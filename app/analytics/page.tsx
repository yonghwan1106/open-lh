'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import CountUp from '@/components/ui/CountUp';
import {
  monthlyTrends,
  regionRisks,
  beforeAfterComparison,
  systemPerformance,
  keyMetrics,
  roiAnalysis,
  internationalBenchmark
} from '@/data/mockStats';

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

export default function AnalyticsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-100 rounded-xl">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">통계 및 분석</h1>
                <p className="text-slate-600">시스템 성과 및 효과 분석</p>
              </div>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'AI 탐지 정확도', value: keyMetrics.aiDetectionAccuracy, suffix: '%', color: 'blue' },
              { label: '투기 차단금액', value: keyMetrics.investmentPrevented, suffix: '억원', color: 'green' },
              { label: '시민 참여자', value: keyMetrics.citizenParticipants, suffix: '명', color: 'purple' },
              { label: '시스템 가동률', value: keyMetrics.systemUptime, suffix: '%', color: 'cyan' },
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 border border-slate-200"
              >
                <p className="text-sm text-slate-600 mb-1">{metric.label}</p>
                <p className={`text-2xl font-bold text-${metric.color}-600`}>
                  <CountUp end={metric.value} decimals={metric.suffix === '%' ? 1 : 0} suffix={metric.suffix} />
                </p>
              </motion.div>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Monthly Trends */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-5 border border-slate-200"
            >
              <h3 className="font-bold text-slate-900 mb-4">월별 투기 의혹 건수 추이</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={monthlyTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis dataKey="month" stroke="#64748B" fontSize={12} />
                    <YAxis stroke="#64748B" fontSize={12} />
                    <Tooltip
                      contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="suspiciousTransactions"
                      name="의심 거래"
                      stroke="#F59E0B"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="investigations"
                      name="조사 착수"
                      stroke="#3B82F6"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="caught"
                      name="적발"
                      stroke="#EF4444"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Region Risk Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-5 border border-slate-200"
            >
              <h3 className="font-bold text-slate-900 mb-4">지역별 위험도 분포</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={regionRisks.slice(0, 6)} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                    <XAxis type="number" stroke="#64748B" fontSize={12} />
                    <YAxis dataKey="region" type="category" stroke="#64748B" fontSize={11} width={80} />
                    <Tooltip
                      contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                    <Bar
                      dataKey="riskScore"
                      name="위험도"
                      fill="#EF4444"
                      radius={[0, 4, 4, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>

          {/* Before After Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl p-5 border border-slate-200 mb-6"
          >
            <h3 className="font-bold text-slate-900 mb-4">시스템 도입 전후 비교</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {beforeAfterComparison.map((item, index) => (
                <motion.div
                  key={item.metric}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 text-center"
                >
                  <p className="text-xs text-slate-600 mb-2">{item.metric}</p>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-lg text-slate-400 line-through">{item.before}</span>
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    <span className="text-xl font-bold text-blue-600">{item.after}</span>
                  </div>
                  <span className="text-xs text-slate-500">{item.unit}</span>
                  <div className={`mt-2 text-xs font-bold ${
                    item.improvement.includes('+') ? 'text-green-600' : 'text-blue-600'
                  }`}>
                    {item.improvement}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* System Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-5 border border-slate-200"
            >
              <h3 className="font-bold text-slate-900 mb-4">시스템 성능 지표</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={systemPerformance}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="system" fontSize={11} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar
                      name="정확도"
                      dataKey="accuracy"
                      stroke="#3B82F6"
                      fill="#3B82F6"
                      fillOpacity={0.3}
                    />
                    <Radar
                      name="커버리지"
                      dataKey="coverage"
                      stroke="#10B981"
                      fill="#10B981"
                      fillOpacity={0.3}
                    />
                    <Radar
                      name="만족도"
                      dataKey="userSatisfaction"
                      stroke="#F59E0B"
                      fill="#F59E0B"
                      fillOpacity={0.3}
                    />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* ROI Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-5 border border-slate-200"
            >
              <h3 className="font-bold text-slate-900 mb-4">ROI 분석</h3>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: '투기 차단', value: roiAnalysis.breakdownOfBenefits.preventedFraud },
                        { name: '운영 효율화', value: roiAnalysis.breakdownOfBenefits.operationalEfficiency },
                        { name: '신뢰도 향상', value: roiAnalysis.breakdownOfBenefits.citizenTrust },
                        { name: '법적 리스크 감소', value: roiAnalysis.breakdownOfBenefits.legalRiskReduction },
                      ]}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {COLORS.map((color, index) => (
                        <Cell key={`cell-${index}`} fill={color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-green-50 rounded-xl p-3 text-center">
                  <p className="text-xs text-green-600 mb-1">투자 수익률</p>
                  <p className="text-2xl font-bold text-green-600">{roiAnalysis.roi}%</p>
                </div>
                <div className="bg-blue-50 rounded-xl p-3 text-center">
                  <p className="text-xs text-blue-600 mb-1">5년 기대효과</p>
                  <p className="text-2xl font-bold text-blue-600">{roiAnalysis.fiveYearBenefit}억원</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* International Benchmark */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-2xl p-5 border border-slate-200"
          >
            <h3 className="font-bold text-slate-900 mb-4">해외 벤치마크 비교</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={internationalBenchmark}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="country" stroke="#64748B" fontSize={11} />
                  <YAxis stroke="#64748B" fontSize={12} />
                  <Tooltip
                    contentStyle={{ borderRadius: 12, border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                  />
                  <Legend />
                  <Bar dataKey="transparency" name="투명성" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="corruption" name="청렴도" fill="#10B981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="digitization" name="디지털화" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 p-4 bg-blue-50 rounded-xl">
              <p className="text-sm text-blue-800">
                <span className="font-bold">목표:</span> 에스토니아 수준의 전자정부 투명성 달성
                (현재 78점 → 목표 95점)
              </p>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
