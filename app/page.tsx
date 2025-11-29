'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 opacity-95"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium">
              국민이 신뢰할 수 있는 LH
            </span>
            <span className="px-3 py-1 bg-cyan-400/30 backdrop-blur-sm rounded-full text-white text-sm">
              공모 분야 3
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            "모두가 아는 LH"
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-cyan-100 mb-6">
            AI 기반 실시간 투명경영 플랫폼
          </p>

          <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            <span className="font-bold text-yellow-300">"모두가 알면, 아무도 못 숨긴다"</span>
            <br />
            정보 비대칭 제거 → 투기 원천 차단 → 국민 신뢰 회복
          </p>

          {/* 프로토타입 바로가기 버튼 */}
          <div className="mb-8">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
              프로토타입 체험하기
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
              <p className="text-cyan-200 text-sm">내부정보 투기</p>
              <p className="text-3xl font-black text-white">0건</p>
              <p className="text-white/70 text-sm">원천 차단</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
              <p className="text-cyan-200 text-sm">신뢰도 향상</p>
              <p className="text-3xl font-black text-white">30% → 75%</p>
              <p className="text-white/70 text-sm">2.5배 상승</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20">
              <p className="text-cyan-200 text-sm">투자 대비 효과</p>
              <p className="text-3xl font-black text-white">ROI 400%</p>
              <p className="text-white/70 text-sm">25억 투자 → 100억 절감</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-2">
            {[
              { id: 'overview', label: '개요' },
              { id: 'problem', label: '현황/문제점' },
              { id: 'solution', label: '개선방안' },
              { id: 'systems', label: '3대 시스템' },
              { id: 'effect', label: '기대효과' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                제안 개요
              </h2>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 mb-6 border border-blue-100">
                <p className="text-lg text-slate-700 leading-relaxed">
                  본 제안은 <span className="font-bold text-blue-700">"정보 비대칭"을 원천 제거</span>하여
                  LH 신뢰를 회복하는 혁신 모델입니다.
                </p>
                <ul className="mt-4 space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    2021년 LH 투기 사태의 본질: "LH 직원만 아는 정보"로 부당 이득
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    현행 대책(감찰/처벌 강화)의 한계: 사후약방문, 투기 유혹은 그대로
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    본 제안의 핵심: <span className="font-semibold">"LH가 아는 것을 국민도 동시에 안다"</span> → 투기 원천 차단
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-4">3대 혁신 시스템</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold mb-2">LH 글래스박스</h4>
                  <p className="text-blue-100 text-sm">의사결정 단계별 실시간 공개</p>
                  <p className="text-white/80 text-sm mt-2">→ 정보 시차 제거</p>
                </div>

                <div className="bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl p-6 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold mb-2">LH 워치독</h4>
                  <p className="text-cyan-100 text-sm">AI 기반 이상거래 자동 탐지</p>
                  <p className="text-white/80 text-sm mt-2">→ 24시간 감시</p>
                </div>

                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-6 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold mb-2">LH 시민감시단</h4>
                  <p className="text-indigo-100 text-sm">국민 참여 모니터링 플랫폼</p>
                  <p className="text-white/80 text-sm mt-2">→ 집단 감시 효과</p>
                </div>
              </div>
            </section>

            {/* Paradigm Shift */}
            <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">패러다임 전환</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                  <h3 className="text-lg font-bold text-red-700 mb-4">기존 접근 (한계)</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600 font-bold text-sm">1</span>
                      <span className="text-slate-700">정보 보호</span>
                    </div>
                    <div className="flex justify-center text-red-400">↓</div>
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600 font-bold text-sm">2</span>
                      <span className="text-slate-700">유출 감시</span>
                    </div>
                    <div className="flex justify-center text-red-400">↓</div>
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600 font-bold text-sm">3</span>
                      <span className="text-slate-700">사후 처벌</span>
                    </div>
                  </div>
                  <p className="mt-4 text-red-600 text-sm font-medium">= 방어적, 소 잃고 외양간</p>
                </div>

                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <h3 className="text-lg font-bold text-green-700 mb-4">제안 접근 (혁신)</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold text-sm">1</span>
                      <span className="text-slate-700 font-semibold">정보 공개</span>
                    </div>
                    <div className="flex justify-center text-green-400">↓</div>
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold text-sm">2</span>
                      <span className="text-slate-700 font-semibold">모두가 앎</span>
                    </div>
                    <div className="flex justify-center text-green-400">↓</div>
                    <div className="flex items-center gap-3">
                      <span className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 font-bold text-sm">3</span>
                      <span className="text-slate-700 font-semibold">투기 불가능</span>
                    </div>
                  </div>
                  <p className="mt-4 text-green-600 text-sm font-medium">= 공격적, 원천 차단</p>
                </div>
              </div>

              <div className="mt-6 bg-amber-50 rounded-xl p-6 border border-amber-200">
                <p className="text-amber-800 font-medium text-center">
                  비유: 기존 = 금고에 돈 넣고 CCTV 감시 /
                  <span className="font-bold"> 제안 = 유리 금고로 모두에게 공개</span>
                </p>
              </div>
            </section>
          </div>
        )}

        {/* Problem Tab */}
        {activeTab === 'problem' && (
          <div className="space-y-8">
            <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center text-red-600 font-bold">1</span>
                2021년 LH 사태 - 신뢰의 붕괴
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                    <p className="text-red-700 font-bold text-lg mb-2">사건 개요</p>
                    <ul className="text-slate-700 space-y-2">
                      <li>• LH 직원 20명 이상 투기 적발</li>
                      <li>• 3기 신도시 사전 정보 이용</li>
                      <li>• 수백억 원대 부당 이득</li>
                    </ul>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-5">
                    <p className="text-slate-800 font-bold mb-2">국민 인식</p>
                    <p className="text-slate-600">"공공기관이 국민 등쳐먹었다"</p>
                    <p className="text-red-600 font-bold mt-2">→ LH 신뢰도 30%대 추락</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 text-white">
                  <p className="text-slate-300 mb-2">근본 원인</p>
                  <p className="text-2xl font-black text-yellow-400 mb-4">"정보의 시차"</p>
                  <p className="text-slate-300 leading-relaxed">
                    LH 직원은 <span className="text-yellow-300 font-bold">6개월~2년</span> 먼저 개발 정보를 인지
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <p className="text-slate-400 text-sm">이 시차가 존재하는 한,</p>
                    <p className="text-white font-bold">투기 유혹은 사라지지 않음</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 font-bold">2</span>
                현행 대책의 구조적 한계
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="px-4 py-3 text-left text-slate-700 font-bold rounded-tl-lg">현행 대책</th>
                      <th className="px-4 py-3 text-left text-slate-700 font-bold rounded-tr-lg">한계점</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-4 py-4 text-slate-700">재산등록 의무화</td>
                      <td className="px-4 py-4 text-red-600">가족·지인 명의 우회 가능</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 py-4 text-slate-700">내부감찰 강화</td>
                      <td className="px-4 py-4 text-red-600">내부자끼리 봐주는 구조</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-slate-700">처벌 강화</td>
                      <td className="px-4 py-4 text-red-600">사후 조치, 이미 피해 발생</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 py-4 text-slate-700">이해충돌방지법</td>
                      <td className="px-4 py-4 text-red-600">신고 의존, 능동적 탐지 불가</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-red-50 rounded-xl p-5 border border-red-200">
                <p className="text-red-800 font-bold text-center">
                  핵심 문제: 정보 비대칭이 존재하는 한, 투기 유혹은 사라지지 않음
                </p>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 font-bold">3</span>
                국민 참여 부재 - 감시 사각지대
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-slate-50 rounded-xl p-5">
                    <p className="text-slate-500 text-sm mb-1">현재 LH 감시 주체</p>
                    <p className="text-slate-800 font-bold">감사원, 국토부 등 관(官) 중심</p>
                    <p className="text-red-600 mt-2">→ 구조적 한계</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-5">
                    <p className="text-slate-500 text-sm mb-1">국민의 역할</p>
                    <p className="text-slate-800 font-bold">사건 터진 후에야 인지</p>
                    <p className="text-red-600 mt-2">→ 사전 예방 불가</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <p className="text-green-800 font-bold mb-4">해외 성공 사례</p>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-bold text-slate-800">에스토니아 전자정부</p>
                      <p className="text-slate-600 text-sm">공무원 열람 시 즉시 국민 알림</p>
                      <p className="text-green-600 font-bold">→ 부정 99% 감소</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="font-bold text-slate-800">서울시 열린데이터광장</p>
                      <p className="text-slate-600 text-sm">정보 공개 후</p>
                      <p className="text-green-600 font-bold">→ 부정 의혹 민원 70% 감소</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Solution Tab */}
        {activeTab === 'solution' && (
          <div className="space-y-8">
            <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">핵심 컨셉</h2>

              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-8 text-white text-center">
                <p className="text-xl mb-2">정보 비대칭 제거 = 투기 원천 차단</p>
                <p className="text-3xl font-black">"숨기는 감시"에서 "공개하는 투명"으로</p>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">실행 로드맵</h2>

              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-blue-100 rounded-full"></div>

                <div className="space-y-8">
                  <div className="relative pl-20">
                    <div className="absolute left-4 w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                      <p className="text-blue-600 font-bold text-sm mb-1">Phase 1 | 1년차</p>
                      <p className="text-slate-800 font-bold text-lg mb-2">시범 운영</p>
                      <ul className="text-slate-600 space-y-1">
                        <li>• 플랫폼 개발 완료</li>
                        <li>• 수도권 1개 사업 시범 적용</li>
                        <li>• 피드백 수집 및 개선</li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative pl-20">
                    <div className="absolute left-4 w-9 h-9 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-100">
                      <p className="text-cyan-600 font-bold text-sm mb-1">Phase 2 | 2년차</p>
                      <p className="text-slate-800 font-bold text-lg mb-2">전국 확대</p>
                      <ul className="text-slate-600 space-y-1">
                        <li>• 전국 신규 사업 전면 적용</li>
                        <li>• AI 이상탐지 시스템 고도화</li>
                        <li>• 시민감시단 본격 운영</li>
                      </ul>
                    </div>
                  </div>

                  <div className="relative pl-20">
                    <div className="absolute left-4 w-9 h-9 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div className="bg-teal-50 rounded-xl p-6 border border-teal-100">
                      <p className="text-teal-600 font-bold text-sm mb-1">Phase 3 | 3년차~</p>
                      <p className="text-slate-800 font-bold text-lg mb-2">전면 확산</p>
                      <ul className="text-slate-600 space-y-1">
                        <li>• LH 전 사업 적용 완료</li>
                        <li>• 타 공공기관 벤치마킹 모델화</li>
                        <li>• K-공공투명성 해외 수출</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">필요 자원</h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="px-4 py-3 text-left text-slate-700 font-bold">항목</th>
                      <th className="px-4 py-3 text-right text-slate-700 font-bold">비용</th>
                      <th className="px-4 py-3 text-left text-slate-700 font-bold">조달 방안</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-4 py-4 text-slate-700">플랫폼 개발</td>
                      <td className="px-4 py-4 text-right font-bold text-slate-800">15억원</td>
                      <td className="px-4 py-4 text-slate-600">디지털뉴딜 예산</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 py-4 text-slate-700">AI 시스템</td>
                      <td className="px-4 py-4 text-right font-bold text-slate-800">10억원</td>
                      <td className="px-4 py-4 text-slate-600">LH 경영혁신 예산</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-slate-700">연간 운영</td>
                      <td className="px-4 py-4 text-right font-bold text-slate-800">5억원</td>
                      <td className="px-4 py-4 text-slate-600">LH 자체 예산</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="px-4 py-4 text-blue-700 font-bold">초기 총비용</td>
                      <td className="px-4 py-4 text-right font-black text-blue-700 text-xl">25억원</td>
                      <td className="px-4 py-4 text-blue-600">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {/* Systems Tab */}
        {activeTab === 'systems' && (
          <div className="space-y-8">
            {/* System 1 */}
            <section className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-blue-200 text-sm">시스템 1</p>
                    <h2 className="text-2xl font-bold">LH 글래스박스</h2>
                    <p className="text-blue-100">의사결정 단계별 실시간 공개</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="px-4 py-3 text-left text-slate-700 font-bold">단계</th>
                        <th className="px-4 py-3 text-center text-slate-700 font-bold">기존</th>
                        <th className="px-4 py-3 text-center text-slate-700 font-bold">제안 (공개 수준)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-4 text-slate-700">개발 후보지 검토</td>
                        <td className="px-4 py-4 text-center text-red-500">비공개</td>
                        <td className="px-4 py-4 text-center text-green-600 font-medium">"OO지역 검토 중" (시군구 단위)</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-4 py-4 text-slate-700">타당성 조사</td>
                        <td className="px-4 py-4 text-center text-red-500">비공개</td>
                        <td className="px-4 py-4 text-center text-green-600 font-medium">"OO동 일대 조사 중" (동 단위)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 text-slate-700">위원회 심의</td>
                        <td className="px-4 py-4 text-center text-red-500">비공개</td>
                        <td className="px-4 py-4 text-center text-green-600 font-medium">실시간 중계 (유튜브/홈페이지)</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-4 py-4 text-slate-700">승인·발표</td>
                        <td className="px-4 py-4 text-center text-orange-500">결과만 공개</td>
                        <td className="px-4 py-4 text-center text-green-600 font-medium">전체 문서 공개</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 bg-blue-50 rounded-xl p-5 border border-blue-100">
                  <p className="text-blue-800 font-medium">
                    <span className="font-bold">효과:</span> 단계별 마스킹으로 민감 정보 보호 + 정보 시차 제거 → "나만 아는 정보" 원천 차단
                  </p>
                </div>
              </div>
            </section>

            {/* System 2 */}
            <section className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
              <div className="bg-gradient-to-r from-cyan-600 to-teal-600 p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cyan-200 text-sm">시스템 2</p>
                    <h2 className="text-2xl font-bold">LH 워치독</h2>
                    <p className="text-cyan-100">AI 기반 이상거래 자동 탐지</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="overflow-x-auto mb-6">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-slate-100">
                        <th className="px-4 py-3 text-left text-slate-700 font-bold">구분</th>
                        <th className="px-4 py-3 text-center text-slate-700 font-bold">기존</th>
                        <th className="px-4 py-3 text-center text-slate-700 font-bold">제안</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      <tr>
                        <td className="px-4 py-4 text-slate-700">감시 대상</td>
                        <td className="px-4 py-4 text-center text-slate-600">직원 본인</td>
                        <td className="px-4 py-4 text-center text-green-600 font-medium">직원+배우자+직계가족+AI 탐지 관계인</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-4 py-4 text-slate-700">감시 방식</td>
                        <td className="px-4 py-4 text-center text-slate-600">연 1회 재산신고</td>
                        <td className="px-4 py-4 text-center text-green-600 font-medium">실시간 등기 연동</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 text-slate-700">탐지 방법</td>
                        <td className="px-4 py-4 text-center text-slate-600">수동 검토</td>
                        <td className="px-4 py-4 text-center text-green-600 font-medium">AI 패턴 분석</td>
                      </tr>
                      <tr className="bg-slate-50">
                        <td className="px-4 py-4 text-slate-700">결과 공개</td>
                        <td className="px-4 py-4 text-center text-slate-600">내부 보고</td>
                        <td className="px-4 py-4 text-center text-green-600 font-medium">국민 대시보드 공개</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-4">AI 위험도 점수 산출</h3>
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-cyan-50 rounded-xl p-4 text-center border border-cyan-100">
                    <p className="text-cyan-600 font-bold text-2xl">30%</p>
                    <p className="text-slate-600 text-sm">개발예정지 반경 거리</p>
                  </div>
                  <div className="bg-cyan-50 rounded-xl p-4 text-center border border-cyan-100">
                    <p className="text-cyan-600 font-bold text-2xl">30%</p>
                    <p className="text-slate-600 text-sm">매입-검토 시점 근접도</p>
                  </div>
                  <div className="bg-cyan-50 rounded-xl p-4 text-center border border-cyan-100">
                    <p className="text-cyan-600 font-bold text-2xl">20%</p>
                    <p className="text-slate-600 text-sm">거래 규모 이상치</p>
                  </div>
                  <div className="bg-cyan-50 rounded-xl p-4 text-center border border-cyan-100">
                    <p className="text-cyan-600 font-bold text-2xl">20%</p>
                    <p className="text-slate-600 text-sm">관계인 네트워크</p>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-5">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                      <span className="text-slate-700"><span className="font-bold">70점+:</span> 자동 조사 착수</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-orange-500 rounded-full"></span>
                      <span className="text-slate-700"><span className="font-bold">50점+:</span> 소명 요청</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                      <span className="text-slate-700"><span className="font-bold">전 건:</span> 대시보드 공개</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* System 3 */}
            <section className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-indigo-200 text-sm">시스템 3</p>
                    <h2 className="text-2xl font-bold">LH 시민감시단</h2>
                    <p className="text-indigo-100">국민 참여 모니터링 플랫폼</p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">관심 지역 알림</h3>
                    <p className="text-slate-600 text-sm mb-3">"우리 동네" 등록 → LH 검토 시 푸시 알림</p>
                    <p className="text-indigo-600 font-bold">+100P</p>
                  </div>

                  <div className="bg-purple-50 rounded-xl p-5 border border-purple-100">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">의심 거래 제보</h3>
                    <p className="text-slate-600 text-sm mb-3">이상 거래 발견 시 원클릭 제보</p>
                    <p className="text-purple-600 font-bold">+500P</p>
                  </div>

                  <div className="bg-pink-50 rounded-xl p-5 border border-pink-100">
                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2">적발 기여</h3>
                    <p className="text-slate-600 text-sm mb-3">제보로 적발 시 포상금</p>
                    <p className="text-pink-600 font-bold">부당이득 10%</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-5 border border-indigo-100">
                  <p className="text-slate-700">
                    <span className="font-bold">포인트 활용:</span> LH 분양 청약 가점, 공공주택 우선순위 등
                  </p>
                  <p className="text-indigo-700 font-bold mt-2">
                    → 수만 명의 "눈"으로 24시간 집단 감시 효과
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Effect Tab */}
        {activeTab === 'effect' && (
          <div className="space-y-8">
            <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">투기 원천 차단 효과</h2>

              <div className="overflow-x-auto mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="px-4 py-3 text-left text-slate-700 font-bold">지표</th>
                      <th className="px-4 py-3 text-center text-slate-700 font-bold">현재</th>
                      <th className="px-4 py-3 text-center text-slate-700 font-bold">3년 후</th>
                      <th className="px-4 py-3 text-center text-slate-700 font-bold">장기</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-4 py-4 text-slate-700">내부정보 투기 건수</td>
                      <td className="px-4 py-4 text-center text-red-600 font-bold">연 5건+</td>
                      <td className="px-4 py-4 text-center text-green-600 font-bold">0건</td>
                      <td className="px-4 py-4 text-center text-green-600 font-bold">0건</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="px-4 py-4 text-slate-700">투기 의혹 민원</td>
                      <td className="px-4 py-4 text-center text-red-600">연 1,000건</td>
                      <td className="px-4 py-4 text-center text-orange-600">200건</td>
                      <td className="px-4 py-4 text-center text-green-600 font-bold">50건 이하</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-slate-700">감찰 비용</td>
                      <td className="px-4 py-4 text-center text-red-600">50억원/년</td>
                      <td className="px-4 py-4 text-center text-orange-600">30억원</td>
                      <td className="px-4 py-4 text-center text-green-600 font-bold">10억원</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-slate-600">투기 사건 1건당 사회적 비용</p>
                    <p className="text-2xl font-black text-slate-800">약 100억원</p>
                    <p className="text-slate-500 text-sm">(소송, 보상, 신뢰 하락)</p>
                  </div>
                  <div className="text-center">
                    <p className="text-slate-600">초기 투자 25억원 →</p>
                    <p className="text-3xl font-black text-green-600">ROI 400%</p>
                    <p className="text-green-700 font-medium">연간 1건만 예방해도</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">국민 신뢰 회복 효과</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-600">LH 신뢰도</span>
                      <span className="text-blue-600 font-bold">30% → 75%</span>
                    </div>
                    <div className="w-full bg-blue-100 rounded-full h-3">
                      <div className="bg-blue-600 h-3 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>

                  <div className="bg-cyan-50 rounded-xl p-5 border border-cyan-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-600">공공기관 투명성 순위</span>
                      <span className="text-cyan-600 font-bold">하위권 → 상위 10%</span>
                    </div>
                    <div className="w-full bg-cyan-100 rounded-full h-3">
                      <div className="bg-cyan-600 h-3 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>

                  <div className="bg-teal-50 rounded-xl p-5 border border-teal-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-600">직원 자부심</span>
                      <span className="text-teal-600 font-bold">"깨끗한 LH"</span>
                    </div>
                    <div className="w-full bg-teal-100 rounded-full h-3">
                      <div className="bg-teal-600 h-3 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">사회적 파급 효과</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
                      <div>
                        <p className="font-bold text-blue-300">공공부문 투명성 혁명</p>
                        <p className="text-slate-400 text-sm">타 공공기관 벤치마킹 모델</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
                      <div>
                        <p className="font-bold text-cyan-300">K-공공투명성</p>
                        <p className="text-slate-400 text-sm">해외 개도국 수출 가능 모델</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
                      <div>
                        <p className="font-bold text-teal-300">국민 참여 민주주의</p>
                        <p className="text-slate-400 text-sm">시민이 직접 감시하는 선진 모델</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">정책 부합성</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 rounded-xl p-5">
                  <p className="text-slate-500 text-sm mb-1">「공공기관의 운영에 관한 법률」</p>
                  <p className="text-slate-800 font-bold">경영 투명성 확보</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-5">
                  <p className="text-slate-500 text-sm mb-1">「이해충돌방지법」</p>
                  <p className="text-slate-800 font-bold">공직자 이해충돌 방지 취지 강화</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-5">
                  <p className="text-slate-500 text-sm mb-1">국정과제</p>
                  <p className="text-slate-800 font-bold">"깨끗한 정부" - LH가 선도 모델</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-5">
                  <p className="text-slate-500 text-sm mb-1">LH 개혁 방향</p>
                  <p className="text-slate-800 font-bold">"의심받는 LH" → "신뢰받는 LH"</p>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-2xl font-black text-cyan-400 mb-2">"모두가 알면, 아무도 못 숨긴다"</p>
            <p className="text-slate-400">숨길 게 없으면, 숨기지 않는다</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm text-slate-400">
            <div>
              <p className="text-slate-500">공모전</p>
              <p className="text-white font-medium">국민과 함께 만드는 새로운 LH</p>
            </div>
            <div>
              <p className="text-slate-500">분야</p>
              <p className="text-white font-medium">③ 국민이 신뢰할 수 있는 LH</p>
            </div>
            <div>
              <p className="text-slate-500">제출일</p>
              <p className="text-white font-medium">2025.11.30</p>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-6 text-center text-slate-500 text-sm">
            <p>본 제안은 에스토니아 전자정부, 서울시 열린데이터광장, 금융권 FDS 등 검증된 기술과 정책을 기반으로 작성되었습니다.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
