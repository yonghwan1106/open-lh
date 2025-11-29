'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import CountUp from '@/components/ui/CountUp';
import { projects, recentActivities, getStageColor } from '@/data/mockProjects';
import { todayMetrics, transactions } from '@/data/mockTransactions';
import { citizenStats } from '@/data/mockCitizens';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const systemCards = [
    {
      title: 'LH 글래스박스',
      description: '의사결정 실시간 공개',
      href: '/glassbox',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600',
      stats: [
        { label: '진행 중 사업', value: projects.filter(p => p.stage !== '승인').length },
        { label: '공개 문서', value: 847 },
      ]
    },
    {
      title: 'LH 워치독',
      description: 'AI 이상거래 탐지',
      href: '/watchdog',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      ),
      color: 'from-orange-500 to-red-500',
      stats: [
        { label: '오늘 탐지', value: todayMetrics.flaggedCount },
        { label: '조사중', value: todayMetrics.investigationCount },
      ]
    },
    {
      title: '시민감시단',
      description: '국민 참여 플랫폼',
      href: '/citizen',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500',
      stats: [
        { label: '참여 시민', value: citizenStats.totalMembers },
        { label: '누적 제보', value: citizenStats.totalReports },
      ]
    },
  ];

  const kpiCards = [
    {
      title: '총 모니터링 사업',
      value: 12,
      suffix: '개',
      change: '+2',
      changeType: 'increase',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
        </svg>
      )
    },
    {
      title: '투기 차단 금액',
      value: 657,
      suffix: '억원',
      change: '+127억',
      changeType: 'increase',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      )
    },
    {
      title: '국민 신뢰도',
      value: 78,
      suffix: '%',
      change: '+23%p',
      changeType: 'increase',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
        </svg>
      )
    },
    {
      title: '시스템 가동률',
      value: 99.97,
      suffix: '%',
      decimals: 2,
      change: '안정',
      changeType: 'stable',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
        </svg>
      )
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {/* Welcome section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <h1 className="text-2xl font-bold text-slate-900">통합 대시보드</h1>
            <p className="text-slate-600">LH 투명경영 플랫폼 실시간 현황</p>
          </motion.div>

          {/* KPI Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {kpiCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-4 lg:p-5 border border-slate-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
                    {card.icon}
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    card.changeType === 'increase' ? 'bg-green-50 text-green-600' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {card.change}
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-1">{card.title}</p>
                <p className="text-2xl lg:text-3xl font-bold text-slate-900">
                  <CountUp end={card.value} decimals={card.decimals || 0} suffix={card.suffix} />
                </p>
              </motion.div>
            ))}
          </div>

          {/* 3대 시스템 Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            {systemCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link href={card.href}>
                  <div className="bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 bg-gradient-to-br ${card.color} rounded-xl text-white group-hover:scale-110 transition-transform`}>
                        {card.icon}
                      </div>
                      <svg className="w-5 h-5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{card.title}</h3>
                    <p className="text-sm text-slate-600 mb-4">{card.description}</p>
                    <div className="flex gap-4">
                      {card.stats.map((stat) => (
                        <div key={stat.label}>
                          <p className="text-xl font-bold text-slate-900">
                            <CountUp end={stat.value} />
                          </p>
                          <p className="text-xs text-slate-500">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Recent Activity & Alerts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl p-5 border border-slate-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900">실시간 활동 피드</h3>
                <Link href="/glassbox" className="text-sm text-blue-600 hover:text-blue-700">
                  전체보기
                </Link>
              </div>
              <div className="space-y-3 max-h-[320px] overflow-auto">
                {recentActivities.slice(0, 6).map((activity, index) => {
                  const stageConfig = getStageColor(activity.stage);
                  return (
                    <motion.div
                      key={activity.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.05 }}
                      className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl"
                    >
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: stageConfig.color }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-900 truncate">{activity.action}</p>
                        <p className="text-xs text-slate-500">
                          {activity.date} {activity.time} · {activity.officer}
                        </p>
                      </div>
                      <span
                        className="text-xs px-2 py-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: stageConfig.bgColor, color: stageConfig.color }}
                      >
                        {activity.stage}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* High Risk Alerts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-2xl p-5 border border-slate-200"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-slate-900">고위험 거래 알림</h3>
                <Link href="/watchdog" className="text-sm text-blue-600 hover:text-blue-700">
                  전체보기
                </Link>
              </div>
              <div className="space-y-3 max-h-[320px] overflow-auto">
                {transactions.filter(t => t.riskScore >= 70).slice(0, 5).map((tx, index) => (
                  <motion.div
                    key={tx.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.05 }}
                    className="p-3 bg-red-50 rounded-xl border border-red-100"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="text-sm font-medium text-slate-900">{tx.location}</p>
                        <p className="text-xs text-slate-500">{tx.date} · {tx.amount}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-red-600">{tx.riskScore}</span>
                        <span className="text-xs text-red-600">위험</span>
                      </div>
                    </div>
                    <div className="w-full bg-red-200 rounded-full h-1.5">
                      <div
                        className="bg-red-500 h-1.5 rounded-full"
                        style={{ width: `${tx.riskScore}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}
