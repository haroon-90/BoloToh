import { useState } from 'react'
import React from 'react'
import { Sparkles, Zap, Flame, BookOpen, UserCheck, Lightbulb } from 'lucide-react'
import Poem from './poem'
import Motivation from './motivation'
import Roast from './roast'
import Story from './story'
import Introduction from './introduce'
import Aiadvice from './advice'

const Main = () => {
  const [selectedTask, setSelectedTask] = useState('poem');

  const tasks = [
    { id: 'poem', label: 'Poem', icon: Sparkles, desc: 'Craft poetic verses' },
    { id: 'Motivation', label: 'Motivation', icon: Zap, desc: 'Inspiring pep talks' },
    { id: 'roast', label: 'Roast', icon: Flame, desc: 'Witty burn generator' },
    { id: 'story', label: 'Story', icon: BookOpen, desc: 'Engaging tales' },
    { id: 'introduction', label: 'Introduction', icon: UserCheck, desc: 'Personal intros' },
    { id: 'advice', label: 'AI Advice', icon: Lightbulb, desc: 'Smart guidance' },
  ];

  const renderComponent = () => {
    switch (selectedTask) {
      case 'poem':
        return <Poem />;
      case 'Motivation':
        return <Motivation />;
      case 'roast':
        return <Roast />;
      case 'story':
        return <Story />;
      case 'introduction':
        return <Introduction />;
      case 'advice':
        return <Aiadvice />;
      default:
        return (
          <div className="flex flex-col items-center justify-center p-12 text-center text-slate-500 bg-white rounded-3xl border border-slate-200 my-8 shadow-xs">
            <Sparkles className="w-10 h-10 text-blue-500 mb-3" />
            <p className="text-lg font-medium text-slate-700">Select an AI tool above to start generating creative content</p>
          </div>
        );
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[calc(100vh-140px)] flex flex-col justify-start">
      {/* Hero Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-4 shadow-xs">
          <Zap className="w-3.5 h-3.5 text-blue-600" />
          <span>Next-Gen AI Content Studio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          What would you like to generate today?
        </h1>
        <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
          Choose a generator tool below, fill in your details, and watch the AI bring your thoughts to life.
        </p>
      </div>

      {/* Navigation Pills */}
      <div className="flex justify-center flex-wrap gap-2.5 mb-8">
        {tasks.map((task) => {
          const isActive = selectedTask === task.id;
          const Icon = task.icon;
          return (
            <button
              key={task.id}
              onClick={() => setSelectedTask(task.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/15 scale-[1.02]'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
              <span>{task.label}</span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Content Component Area */}
      <div className="w-full">
        {renderComponent()}
      </div>
    </main>
  );
};

export default Main;
