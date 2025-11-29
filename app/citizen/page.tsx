'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import CountUp from '@/components/ui/CountUp';
import {
  citizenStats,
  myProfile,
  myReports,
  topReporters,
  regionRankings,
  reportCategories,
  reportStatusConfig,
  benefits,
  type Report
} from '@/data/mockCitizens';

export default function CitizenPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'report' | 'ranking'>('dashboard');
  const [showReportForm, setShowReportForm] = useState(false);

  const tabs = [
    { id: 'dashboard', label: '내 현황', icon: '📊' },
    { id: 'report', label: '제보 센터', icon: '📝' },
    { id: 'ranking', label: '랭킹', icon: '🏆' },
  ];

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
              <div className="p-2 bg-green-100 rounded-xl">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">LH 시민감시단</h1>
                <p className="text-slate-600">국민과 함께하는 투명 LH</p>
              </div>
            </div>
          </motion.div>

          {/* Global Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-4 text-white"
            >
              <p className="text-green-100 text-sm mb-1">총 참여 시민</p>
              <p className="text-2xl lg:text-3xl font-bold">
                <CountUp end={citizenStats.totalMembers} />명
              </p>
              <p className="text-xs text-green-200 mt-1">+{citizenStats.monthlyGrowth}% 전월 대비</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-4 border border-slate-200"
            >
              <p className="text-slate-600 text-sm mb-1">누적 제보</p>
              <p className="text-2xl lg:text-3xl font-bold text-slate-900">
                <CountUp end={citizenStats.totalReports} />건
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-4 border border-slate-200"
            >
              <p className="text-slate-600 text-sm mb-1">적발 기여</p>
              <p className="text-2xl lg:text-3xl font-bold text-orange-600">
                <CountUp end={citizenStats.successfulCatches} />건
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-4 border border-slate-200"
            >
              <p className="text-slate-600 text-sm mb-1">총 포상금</p>
              <p className="text-2xl lg:text-3xl font-bold text-blue-600">
                <CountUp end={citizenStats.totalRewards / 100000000} decimals={1} suffix="억원" />
              </p>
            </motion.div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-2 mb-6 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
              <motion.div
                key="dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-6"
              >
                {/* My Profile */}
                <div className="lg:col-span-1">
                  <div className="bg-white rounded-2xl border border-slate-200 p-5">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">
                        {myProfile.nickname.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{myProfile.nickname}</h3>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-yellow-100 text-yellow-700 text-xs rounded-full font-medium">
                            {myProfile.level}
                          </span>
                          <span className="text-xs text-slate-500">#{myProfile.rank}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-slate-50 rounded-xl p-3 text-center">
                        <p className="text-2xl font-bold text-green-600">{myProfile.points.toLocaleString()}</p>
                        <p className="text-xs text-slate-500">포인트</p>
                      </div>
                      <div className="bg-slate-50 rounded-xl p-3 text-center">
                        <p className="text-2xl font-bold text-slate-900">{myProfile.reports}</p>
                        <p className="text-xs text-slate-500">제보</p>
                      </div>
                    </div>

                    {/* Badges */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-slate-700 mb-2">획득 배지</h4>
                      <div className="flex gap-2">
                        {myProfile.badges.map((badge) => (
                          <div
                            key={badge.id}
                            className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center text-white text-lg"
                            title={badge.name}
                          >
                            {badge.icon === 'flag' && '🚩'}
                            {badge.icon === 'eye' && '👁️'}
                            {badge.icon === 'shield' && '🛡️'}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Watch Areas */}
                    <div>
                      <h4 className="text-sm font-medium text-slate-700 mb-2">관심 지역</h4>
                      <div className="space-y-2">
                        {myProfile.watchAreas.map((area) => (
                          <div key={area.id} className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
                            <span className="text-sm text-slate-900">{area.name}</span>
                            <span className={`w-2 h-2 rounded-full ${area.notifications ? 'bg-green-500' : 'bg-slate-300'}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Point History & Benefits */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Point History */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5">
                    <h3 className="font-bold text-slate-900 mb-4">포인트 적립 내역</h3>
                    <div className="space-y-3 max-h-[250px] overflow-auto">
                      {myProfile.pointHistory.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                          <div>
                            <p className="text-sm font-medium text-slate-900">{item.description}</p>
                            <p className="text-xs text-slate-500">{item.date}</p>
                          </div>
                          <span className={`text-sm font-bold ${item.type === '적립' ? 'text-green-600' : 'text-red-600'}`}>
                            {item.type === '적립' ? '+' : ''}{item.amount.toLocaleString()}P
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-white rounded-2xl border border-slate-200 p-5">
                    <h3 className="font-bold text-slate-900 mb-4">혜택 안내</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {benefits.map((benefit) => (
                        <div key={benefit.title} className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-100">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-lg">
                              {benefit.icon === 'home' && '🏠'}
                              {benefit.icon === 'bell' && '🔔'}
                              {benefit.icon === 'gift' && '🎁'}
                              {benefit.icon === 'cash' && '💰'}
                            </span>
                            <h4 className="font-medium text-slate-900">{benefit.title}</h4>
                          </div>
                          <p className="text-xs text-slate-600">{benefit.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'report' && (
              <motion.div
                key="report"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                {/* New Report Button */}
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-slate-900">내 제보 현황</h3>
                  <button
                    onClick={() => setShowReportForm(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    새 제보 작성
                  </button>
                </div>

                {/* Reports List */}
                <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="p-4 space-y-3 max-h-[500px] overflow-auto">
                    {myReports.map((report, index) => {
                      const statusConfig = reportStatusConfig[report.status];
                      return (
                        <motion.div
                          key={report.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="p-4 bg-slate-50 rounded-xl"
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <div className="flex items-center gap-2 mb-1">
                                <span
                                  className="px-2 py-0.5 rounded text-xs font-medium"
                                  style={{ backgroundColor: statusConfig.bgColor, color: statusConfig.color }}
                                >
                                  {report.status}
                                </span>
                                <span className="text-xs text-slate-500">{report.category}</span>
                              </div>
                              <p className="text-sm font-medium text-slate-900">{report.location}</p>
                            </div>
                            <span className="text-xs text-slate-500">{report.date}</span>
                          </div>
                          <p className="text-sm text-slate-600 mb-2">{report.content}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13" />
                              </svg>
                              첨부파일 {report.attachments}개
                            </div>
                            {report.reward && (
                              <span className="text-sm font-bold text-green-600">
                                +{report.reward.toLocaleString()}원
                              </span>
                            )}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'ranking' && (
              <motion.div
                key="ranking"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                {/* Top Reporters */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900 mb-4">이달의 TOP 10 시민감시단</h3>
                  <div className="space-y-2">
                    {topReporters.map((reporter, index) => (
                      <motion.div
                        key={reporter.rank}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`flex items-center gap-3 p-3 rounded-xl ${
                          index < 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50' : 'bg-slate-50'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                          index === 0 ? 'bg-yellow-400 text-white' :
                          index === 1 ? 'bg-gray-300 text-white' :
                          index === 2 ? 'bg-orange-400 text-white' :
                          'bg-slate-200 text-slate-600'
                        }`}>
                          {reporter.rank}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900">{reporter.nickname}</p>
                          <p className="text-xs text-slate-500">
                            제보 {reporter.reports}건 · 적발 {reporter.successfulCatches}건
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-green-600">{reporter.points.toLocaleString()}P</p>
                          <p className="text-xs text-slate-500">{reporter.level}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Region Rankings */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5">
                  <h3 className="font-bold text-slate-900 mb-4">지역별 참여율 순위</h3>
                  <div className="space-y-2">
                    {regionRankings.map((region, index) => (
                      <motion.div
                        key={region.region}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl"
                      >
                        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-sm">
                          {region.rank}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900">{region.region}</p>
                          <p className="text-xs text-slate-500">
                            {region.members.toLocaleString()}명 참여
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold text-blue-600">{region.participationRate}%</p>
                          <p className="text-xs text-slate-500">참여율</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>

      {/* Report Form Modal */}
      <AnimatePresence>
        {showReportForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowReportForm(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-lg w-full max-h-[80vh] overflow-auto"
            >
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">새 제보 작성</h2>
                    <p className="text-slate-500">의심 거래를 제보해주세요</p>
                  </div>
                  <button
                    onClick={() => setShowReportForm(false)}
                    className="p-2 hover:bg-slate-100 rounded-lg"
                  >
                    <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">제보 유형</label>
                  <select className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option value="">유형을 선택하세요</option>
                    {reportCategories.map((cat) => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">위치</label>
                  <input
                    type="text"
                    placeholder="예: 화성시 동탄면 목리"
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                {/* Content */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">제보 내용</label>
                  <textarea
                    rows={4}
                    placeholder="의심되는 거래에 대해 상세히 작성해주세요"
                    className="w-full px-4 py-2 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">증거 자료 첨부</label>
                  <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center">
                    <svg className="w-10 h-10 text-slate-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                    </svg>
                    <p className="text-sm text-slate-600">파일을 드래그하거나 클릭하여 업로드</p>
                    <p className="text-xs text-slate-400 mt-1">JPG, PNG, PDF (최대 10MB)</p>
                  </div>
                </div>

                {/* Submit */}
                <button className="w-full py-3 bg-green-600 text-white font-medium rounded-xl hover:bg-green-700 transition-colors">
                  제보 접수하기
                </button>

                <p className="text-xs text-slate-500 text-center">
                  허위 제보 시 불이익이 있을 수 있습니다. 신중하게 작성해주세요.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
