'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import CountUp from '@/components/ui/CountUp';
import { projects, recentActivities, getStageColor, type Project } from '@/data/mockProjects';

export default function GlassboxPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedStage, setSelectedStage] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const stages = ['all', '검토중', '조사중', '심의중', '승인'];
  const filteredProjects = selectedStage === 'all'
    ? projects
    : projects.filter(p => p.stage === selectedStage);

  const stats = {
    total: projects.length,
    reviewing: projects.filter(p => p.stage === '검토중').length,
    investigating: projects.filter(p => p.stage === '조사중').length,
    deliberating: projects.filter(p => p.stage === '심의중').length,
    approved: projects.filter(p => p.stage === '승인').length,
  };

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
              <div className="p-2 bg-blue-100 rounded-xl">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">LH 글래스박스</h1>
                <p className="text-slate-600">의사결정 실시간 공개 시스템</p>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-4 border border-slate-200"
            >
              <p className="text-sm text-slate-600 mb-1">전체 사업</p>
              <p className="text-2xl font-bold text-slate-900">
                <CountUp end={stats.total} suffix="건" />
              </p>
            </motion.div>
            {[
              { label: '검토중', value: stats.reviewing, color: '#F59E0B' },
              { label: '조사중', value: stats.investigating, color: '#F97316' },
              { label: '심의중', value: stats.deliberating, color: '#EF4444' },
              { label: '승인완료', value: stats.approved, color: '#10B981' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
                className="bg-white rounded-2xl p-4 border border-slate-200"
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <p className="text-sm text-slate-600">{item.label}</p>
                </div>
                <p className="text-2xl font-bold" style={{ color: item.color }}>
                  <CountUp end={item.value} suffix="건" />
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Project List */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
              >
                {/* Filter tabs */}
                <div className="p-4 border-b border-slate-200">
                  <div className="flex gap-2 overflow-x-auto">
                    {stages.map((stage) => {
                      const isActive = selectedStage === stage;
                      const stageConfig = stage !== 'all' ? getStageColor(stage) : null;
                      return (
                        <button
                          key={stage}
                          onClick={() => setSelectedStage(stage)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                            isActive
                              ? 'bg-blue-600 text-white'
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          {stage === 'all' ? '전체' : stage}
                          {stageConfig && (
                            <span
                              className="ml-2 w-2 h-2 rounded-full inline-block"
                              style={{ backgroundColor: isActive ? '#fff' : stageConfig.color }}
                            />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Project cards */}
                <div className="p-4 space-y-3 max-h-[600px] overflow-auto">
                  <AnimatePresence mode="popLayout">
                    {filteredProjects.map((project, index) => {
                      const stageConfig = getStageColor(project.stage);
                      return (
                        <motion.div
                          key={project.id}
                          layout
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ delay: index * 0.05 }}
                          onClick={() => setSelectedProject(project)}
                          className="p-4 bg-slate-50 rounded-xl hover:bg-slate-100 cursor-pointer transition-colors"
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-bold text-slate-900">{project.name}</h3>
                              <p className="text-sm text-slate-500">{project.region}</p>
                            </div>
                            <span
                              className="px-3 py-1 rounded-full text-xs font-medium"
                              style={{ backgroundColor: stageConfig.bgColor, color: stageConfig.color }}
                            >
                              {stageConfig.label}
                            </span>
                          </div>

                          {/* Progress bar */}
                          <div className="mb-3">
                            <div className="flex justify-between text-xs text-slate-500 mb-1">
                              <span>진행률</span>
                              <span>{project.progress}%</span>
                            </div>
                            <div className="w-full bg-slate-200 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${project.progress}%` }}
                                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                                className="h-2 rounded-full"
                                style={{ backgroundColor: stageConfig.color }}
                              />
                            </div>
                          </div>

                          <div className="flex gap-4 text-xs text-slate-500">
                            <span>면적: {project.area.toLocaleString()}만㎡</span>
                            <span>예산: {project.budget.toLocaleString()}억원</span>
                            <span>세대: {project.households.toLocaleString()}호</span>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            {/* Timeline Feed */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl border border-slate-200 p-4"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">실시간 타임라인</h3>
                  <motion.div
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-1.5"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-xs text-green-600 font-medium">LIVE</span>
                  </motion.div>
                </div>

                <div className="space-y-4 max-h-[550px] overflow-auto">
                  {recentActivities.map((activity, index) => {
                    const stageConfig = getStageColor(activity.stage);
                    return (
                      <motion.div
                        key={activity.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="relative pl-6 pb-4 border-l-2 border-slate-200 last:border-transparent"
                      >
                        <div
                          className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full border-2 border-white"
                          style={{ backgroundColor: stageConfig.color }}
                        />
                        <div className="text-xs text-slate-500 mb-1">
                          {activity.date} {activity.time}
                        </div>
                        <p className="text-sm text-slate-900 mb-1">{activity.action}</p>
                        <div className="flex items-center gap-2">
                          <span
                            className="text-xs px-2 py-0.5 rounded"
                            style={{ backgroundColor: stageConfig.bgColor, color: stageConfig.color }}
                          >
                            {activity.stage}
                          </span>
                          <span className="text-xs text-slate-400">{activity.officer}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-auto"
            >
              <div className="p-6 border-b border-slate-200">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-slate-900">{selectedProject.name}</h2>
                    <p className="text-slate-500">{selectedProject.region}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-slate-100 rounded-lg"
                  >
                    <svg className="w-5 h-5 text-slate-500" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-6">
                {/* Progress */}
                <div className="mb-6">
                  <h3 className="font-medium text-slate-900 mb-3">진행 현황</h3>
                  <div className="flex items-center gap-2 mb-2">
                    {['검토', '조사', '심의', '승인'].map((step, index) => {
                      const progress = selectedProject.progress;
                      const stepProgress = (index + 1) * 25;
                      const isCompleted = progress >= stepProgress;
                      const isCurrent = progress >= stepProgress - 25 && progress < stepProgress;
                      return (
                        <div key={step} className="flex-1">
                          <div className={`h-2 rounded-full ${
                            isCompleted ? 'bg-green-500' : isCurrent ? 'bg-blue-500' : 'bg-slate-200'
                          }`} />
                          <p className={`text-xs mt-1 text-center ${
                            isCompleted ? 'text-green-600' : isCurrent ? 'text-blue-600' : 'text-slate-400'
                          }`}>
                            {step}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-sm text-slate-500 mb-1">사업 면적</p>
                    <p className="text-lg font-bold text-slate-900">{selectedProject.area.toLocaleString()}만㎡</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-sm text-slate-500 mb-1">총 예산</p>
                    <p className="text-lg font-bold text-slate-900">{selectedProject.budget.toLocaleString()}억원</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-sm text-slate-500 mb-1">공급 세대</p>
                    <p className="text-lg font-bold text-slate-900">{selectedProject.households.toLocaleString()}호</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-4">
                    <p className="text-sm text-slate-500 mb-1">완료 예정</p>
                    <p className="text-lg font-bold text-slate-900">{selectedProject.expectedEndDate}</p>
                  </div>
                </div>

                {/* Documents */}
                <div className="mb-6">
                  <h3 className="font-medium text-slate-900 mb-3">공개 문서</h3>
                  <div className="space-y-2">
                    {selectedProject.documents.map((doc) => (
                      <div key={doc.id} className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 cursor-pointer">
                        <div className="p-2 bg-red-100 rounded-lg">
                          <svg className="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 2l5 5h-5V4zm-3 9v6H8v-6h2zm4 0v6h-2v-4h2v4zm4 0v6h-2v-2h2v2z"/>
                          </svg>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900">{doc.name}</p>
                          <p className="text-xs text-slate-500">{doc.date} · {doc.size}</p>
                        </div>
                        <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <h3 className="font-medium text-slate-900 mb-3">처리 이력</h3>
                  <div className="space-y-3">
                    {selectedProject.timeline.map((event) => {
                      const stageConfig = getStageColor(event.stage);
                      return (
                        <div key={event.id} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
                          <div
                            className="w-2 h-2 rounded-full mt-2"
                            style={{ backgroundColor: stageConfig.color }}
                          />
                          <div className="flex-1">
                            <p className="text-sm text-slate-900">{event.action}</p>
                            <p className="text-xs text-slate-500">{event.date} {event.time} · {event.officer}</p>
                          </div>
                          <span
                            className="text-xs px-2 py-1 rounded"
                            style={{ backgroundColor: stageConfig.bgColor, color: stageConfig.color }}
                          >
                            {event.stage}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
