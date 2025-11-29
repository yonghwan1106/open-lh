'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const systems = [
    {
      id: 'glassbox',
      title: 'LH 글래스박스',
      subtitle: '의사결정 실시간 공개',
      description: '개발사업 검토부터 승인까지 모든 단계를 실시간으로 공개합니다.',
      href: '/glassbox',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
      stats: { label: '진행 중 사업', value: '12건' }
    },
    {
      id: 'watchdog',
      title: 'LH 워치독',
      subtitle: 'AI 이상거래 탐지',
      description: 'AI가 24시간 부동산 거래를 분석하여 투기 의심 거래를 자동 탐지합니다.',
      href: '/watchdog',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      ),
      color: 'from-orange-500 to-red-500',
      stats: { label: '오늘 탐지', value: '12건' }
    },
    {
      id: 'citizen',
      title: '시민감시단',
      subtitle: '국민 참여 플랫폼',
      description: '시민이 직접 의심 거래를 제보하고 포상금을 받을 수 있습니다.',
      href: '/citizen',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500',
      stats: { label: '참여 시민', value: '127,543명' }
    },
    {
      id: 'analytics',
      title: '통계/분석',
      subtitle: '성과 데이터 시각화',
      description: '시스템 도입 효과와 투기 차단 성과를 한눈에 확인합니다.',
      href: '/analytics',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
        </svg>
      ),
      color: 'from-purple-500 to-indigo-500',
      stats: { label: 'ROI', value: '400%' }
    },
  ];

  const metrics = [
    { value: '0건', label: '내부정보 투기', desc: '원천 차단' },
    { value: '657억', label: '투기 차단 금액', desc: '연간 절감' },
    { value: '78%', label: '국민 신뢰도', desc: '30%에서 상승' },
    { value: '99.97%', label: '시스템 가동률', desc: '24시간 감시' },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm">LH 투명경영 플랫폼 프로토타입</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              모두가 아는{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                LH
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-slate-300 mb-4 max-w-3xl mx-auto">
              AI 기반 실시간 투명경영 플랫폼
            </p>
            <p className="text-lg text-cyan-400 font-medium mb-12">
              "모두가 알면, 아무도 못 숨긴다"
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-lg rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                </svg>
                통합 대시보드
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
                >
                  <p className="text-3xl md:text-4xl font-bold text-white mb-1">{metric.value}</p>
                  <p className="text-sm text-slate-400">{metric.label}</p>
                  <p className="text-xs text-cyan-400">{metric.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </header>

      {/* Systems Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              3대 핵심 시스템
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              정보 비대칭을 원천 제거하여 투기를 차단하는 혁신 플랫폼
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systems.map((system, index) => (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={system.href}>
                  <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600 transition-all hover:bg-slate-800/80 cursor-pointer overflow-hidden">
                    {/* Hover gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${system.color} opacity-0 group-hover:opacity-5 transition-opacity`} />

                    <div className="relative">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-4 bg-gradient-to-br ${system.color} rounded-2xl text-white`}>
                          {system.icon}
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-white">{system.stats.value}</p>
                          <p className="text-xs text-slate-500">{system.stats.label}</p>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {system.title}
                      </h3>
                      <p className="text-cyan-400 text-sm font-medium mb-3">{system.subtitle}</p>
                      <p className="text-slate-400 text-sm mb-6">{system.description}</p>

                      <div className="flex items-center gap-2 text-slate-500 group-hover:text-cyan-400 transition-colors">
                        <span className="text-sm font-medium">자세히 보기</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-20 lg:py-32 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              패러다임 전환
            </h2>
            <p className="text-slate-400">
              기존의 방어적 접근에서 공격적 원천 차단으로
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 rounded-3xl p-8 border border-slate-700/50"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">기존 접근</h3>
              </div>
              <div className="space-y-4">
                {['정보 보호 (비밀 유지)', '유출 감시 (CCTV식)', '사후 처벌 (소 잃고 외양간)'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-slate-400 text-sm font-bold">{i + 1}</span>
                    <span className="text-slate-400">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-red-400 text-sm">→ 투기 유혹은 그대로, 적발은 우연</p>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 rounded-3xl p-8 border border-cyan-500/30"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">제안 접근</h3>
              </div>
              <div className="space-y-4">
                {['정보 공개 (실시간 투명)', '모두가 앎 (정보 대칭)', '투기 불가능 (원천 차단)'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400 text-sm font-bold">{i + 1}</span>
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-cyan-400 text-sm">→ 투기 자체가 불가능한 구조</p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-slate-500 mt-12 max-w-2xl mx-auto"
          >
            "금고에 돈을 넣고 CCTV로 감시하는 것"에서
            <br />
            <span className="text-cyan-400">"유리 금고로 모두에게 공개하는 것"</span>으로 전환
          </motion.p>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              지금 바로 체험해보세요
            </h2>
            <p className="text-slate-400 mb-8">
              투명한 LH의 미래를 확인하세요
            </p>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-xl rounded-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all"
            >
              프로토타입 시작하기
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-white">모두가 아는 LH</p>
                <p className="text-xs text-slate-500">AI 기반 투명경영 플랫폼</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-slate-500 text-sm">
                「국민과 함께 만드는 새로운 LH」 공모전 출품작
              </p>
              <p className="text-slate-600 text-xs mt-1">
                ③ 국민이 신뢰할 수 있는 LH 분야
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
