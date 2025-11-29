'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import CountUp from '@/components/ui/CountUp';
import { transactions, todayMetrics, getRiskColor, statusConfig, type Transaction } from '@/data/mockTransactions';

export default function WatchdogPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  const statuses = ['all', '정상', '주의', '경고', '조사중', '적발'];
  const filteredTransactions = selectedStatus === 'all'
    ? transactions
    : transactions.filter(t => t.status === selectedStatus);

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
              <div className="p-2 bg-orange-100 rounded-xl">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">LH 워치독</h1>
                <p className="text-slate-600">AI 기반 이상거래 탐지 시스템</p>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-4 border border-slate-200"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                  </svg>
                </div>
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xs text-green-600 font-medium"
                >
                  실시간
                </motion.span>
              </div>
              <p className="text-sm text-slate-600 mb-1">오늘 분석 거래</p>
              <p className="text-2xl font-bold text-slate-900">
                <CountUp end={todayMetrics.totalTransactions} />건
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 border border-orange-200"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-orange-200 rounded-lg">
                  <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-orange-700 mb-1">탐지 건수</p>
              <p className="text-2xl font-bold text-orange-600">
                <CountUp end={todayMetrics.flaggedCount} />건
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-4 border border-red-200"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-red-200 rounded-lg">
                  <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-red-700 mb-1">고위험 거래</p>
              <p className="text-2xl font-bold text-red-600">
                <CountUp end={todayMetrics.highRiskCount} />건
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 border border-blue-200"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-blue-200 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-blue-700 mb-1">조사 착수</p>
              <p className="text-2xl font-bold text-blue-600">
                <CountUp end={todayMetrics.investigationCount} />건
              </p>
            </motion.div>
          </div>

          {/* AI Score Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-4 border border-slate-200 mb-6"
          >
            <h3 className="font-bold text-slate-900 mb-3">AI 위험도 점수 구성</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: '거리 점수', max: 30, desc: '개발예정지와의 거리', color: '#3B82F6' },
                { name: '시점 점수', max: 30, desc: '정보공개 전 거래 여부', color: '#8B5CF6' },
                { name: '규모 점수', max: 20, desc: '거래금액 이상 여부', color: '#F59E0B' },
                { name: '관계 점수', max: 20, desc: '관계자 연결망 분석', color: '#EF4444' },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${item.color}20` }}>
                    <span className="text-sm font-bold" style={{ color: item.color }}>{item.max}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Transaction List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
          >
            {/* Filter tabs */}
            <div className="p-4 border-b border-slate-200">
              <div className="flex gap-2 overflow-x-auto">
                {statuses.map((status) => {
                  const isActive = selectedStatus === status;
                  const config = status !== 'all' ? statusConfig[status as keyof typeof statusConfig] : null;
                  return (
                    <button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                        isActive
                          ? 'bg-slate-800 text-white'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {status === 'all' ? '전체' : status}
                      {config && (
                        <span
                          className="ml-2 w-2 h-2 rounded-full inline-block"
                          style={{ backgroundColor: isActive ? '#fff' : config.color }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Transaction cards */}
            <div className="p-4 space-y-3 max-h-[600px] overflow-auto">
              <AnimatePresence mode="popLayout">
                {filteredTransactions.map((tx, index) => {
                  const riskConfig = getRiskColor(tx.riskScore);
                  const config = statusConfig[tx.status];
                  return (
                    <motion.div
                      key={tx.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: index * 0.03 }}
                      onClick={() => setSelectedTransaction(tx)}
                      className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-slate-900">{tx.location}</h3>
                            <span
                              className="px-2 py-0.5 rounded text-xs font-medium"
                              style={{ backgroundColor: config.bgColor, color: config.color }}
                            >
                              {tx.status}
                            </span>
                          </div>
                          <p className="text-sm text-slate-500">{tx.date} {tx.time} · {tx.amount}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <span
                              className="text-2xl font-bold"
                              style={{ color: riskConfig.color }}
                            >
                              {tx.riskScore}
                            </span>
                            <span
                              className="text-xs px-2 py-1 rounded-full"
                              style={{ backgroundColor: riskConfig.bgColor, color: riskConfig.color }}
                            >
                              {riskConfig.label}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Risk Score Bar */}
                      <div className="mb-3">
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${tx.riskScore}%` }}
                            transition={{ duration: 1, delay: 0.5 + index * 0.05 }}
                            className="h-2 rounded-full"
                            style={{ backgroundColor: riskConfig.color }}
                          />
                        </div>
                      </div>

                      {/* Score breakdown */}
                      <div className="grid grid-cols-4 gap-2">
                        <div className="text-center">
                          <div className="text-xs text-slate-500 mb-1">거리</div>
                          <div className="text-sm font-bold text-blue-600">{tx.scores.distance}/30</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-slate-500 mb-1">시점</div>
                          <div className="text-sm font-bold text-purple-600">{tx.scores.timing}/30</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-slate-500 mb-1">규모</div>
                          <div className="text-sm font-bold text-orange-600">{tx.scores.amount}/20</div>
                        </div>
                        <div className="text-center">
                          <div className="text-xs text-slate-500 mb-1">관계</div>
                          <div className="text-sm font-bold text-red-600">{tx.scores.network}/20</div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </motion.div>
        </main>
      </div>

      {/* Transaction Detail Modal */}
      <AnimatePresence>
        {selectedTransaction && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTransaction(null)}
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
                    <h2 className="text-xl font-bold text-slate-900">거래 상세 분석</h2>
                    <p className="text-slate-500">{selectedTransaction.location}</p>
                  </div>
                  <button
                    onClick={() => setSelectedTransaction(null)}
                    className="p-2 hover:bg-slate-100 rounded-lg"
                  >
                    <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6">
                {/* Risk Score */}
                <div className="text-center mb-6">
                  <div
                    className="inline-flex items-center justify-center w-24 h-24 rounded-full mb-3"
                    style={{ backgroundColor: getRiskColor(selectedTransaction.riskScore).bgColor }}
                  >
                    <span
                      className="text-4xl font-bold"
                      style={{ color: getRiskColor(selectedTransaction.riskScore).color }}
                    >
                      {selectedTransaction.riskScore}
                    </span>
                  </div>
                  <p className="text-lg font-bold" style={{ color: getRiskColor(selectedTransaction.riskScore).color }}>
                    {getRiskColor(selectedTransaction.riskScore).label} 거래
                  </p>
                </div>

                {/* Score breakdown */}
                <div className="space-y-4 mb-6">
                  {[
                    { name: '거리 점수', score: selectedTransaction.scores.distance, max: 30, color: '#3B82F6', desc: '개발예정지로부터 500m 이내 거래' },
                    { name: '시점 점수', score: selectedTransaction.scores.timing, max: 30, color: '#8B5CF6', desc: '정보 공개 3개월 전 거래' },
                    { name: '규모 점수', score: selectedTransaction.scores.amount, max: 20, color: '#F59E0B', desc: '시세 대비 20% 이상 높은 거래가' },
                    { name: '관계 점수', score: selectedTransaction.scores.network, max: 20, color: '#EF4444', desc: '관계자 2촌 이내 연결 탐지' },
                  ].map((item) => (
                    <div key={item.name}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-slate-700">{item.name}</span>
                        <span className="text-sm font-bold" style={{ color: item.color }}>
                          {item.score}/{item.max}
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 mb-1">
                        <div
                          className="h-2 rounded-full transition-all"
                          style={{ width: `${(item.score / item.max) * 100}%`, backgroundColor: item.color }}
                        />
                      </div>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Transaction Info */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-slate-50 rounded-xl p-3">
                    <p className="text-xs text-slate-500 mb-1">거래일</p>
                    <p className="text-sm font-bold text-slate-900">{selectedTransaction.date}</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3">
                    <p className="text-xs text-slate-500 mb-1">거래금액</p>
                    <p className="text-sm font-bold text-slate-900">{selectedTransaction.amount}</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3">
                    <p className="text-xs text-slate-500 mb-1">면적</p>
                    <p className="text-sm font-bold text-slate-900">{selectedTransaction.area.toLocaleString()}㎡</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3">
                    <p className="text-xs text-slate-500 mb-1">지목</p>
                    <p className="text-sm font-bold text-slate-900">{selectedTransaction.landType}</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3">
                    <p className="text-xs text-slate-500 mb-1">매수자</p>
                    <p className="text-sm font-bold text-slate-900">{selectedTransaction.buyerType}</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3">
                    <p className="text-xs text-slate-500 mb-1">매도자</p>
                    <p className="text-sm font-bold text-slate-900">{selectedTransaction.sellerType}</p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                    <span className="font-medium text-blue-900">관련 개발사업</span>
                  </div>
                  <p className="text-sm text-blue-800">{selectedTransaction.relatedProject}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
