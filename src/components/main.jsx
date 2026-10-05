import { useState } from 'react'
import React from 'react'
import Poem from './poem'
import Motivation from './motivation'
import Roast from './roast'
import Story from './story'
import Introduction from './introduce'
import Aiadvice from './advice'

const Main = () => {
  const [selectedTask, setSelectedTask] = useState('poem');

  const tasks = [
    { id: 'poem', label: 'Poem', icon: '✨', desc: 'Craft poetic verses' },
    { id: 'Motivation', label: 'Motivation', icon: '🚀', desc: 'Inspiring pep talks' },
    { id: 'roast', label: 'Roast', icon: '🔥', desc: 'Witty burn generator' },
    { id: 'story', label: 'Story', icon: '📖', desc: 'Engaging tales' },
    { id: 'introduction', label: 'Introduction', icon: '👋', desc: 'Personal intros' },
    { id: 'advice', label: 'AI Advice', icon: '💡', desc: 'Smart guidance' },
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
          <div className="flex flex-col items-center justify-center p-12 text-center text-gray-400 bg-gray-900/40 rounded-3xl border border-gray-800 my-8">
            <span className="text-4xl mb-3">✨</span>
            <p className="text-lg font-medium text-gray-300">Select an AI tool above to start generating creative content</p>
          </div>
        );
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-[calc(100vh-140px)] flex flex-col justify-start">
      {/* Hero Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-400 border border-blue-500/20 mb-4">
          <span>⚡ Next-Gen AI Content Studio</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          What would you like to generate today?
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
          Choose a generator tool below, fill in your details, and watch the AI bring your thoughts to life.
        </p>
      </div>

      {/* Navigation Pills */}
      <div className="flex justify-center flex-wrap gap-2.5 mb-8">
        {tasks.map((task) => {
          const isActive = selectedTask === task.id;
          return (
            <button
              key={task.id}
              onClick={() => setSelectedTask(task.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 border cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/25 scale-[1.02]'
                  : 'bg-gray-900/80 text-gray-300 border-gray-800 hover:bg-gray-800 hover:text-white hover:border-gray-700'
              }`}
            >
              <span className="text-base">{task.icon}</span>
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
