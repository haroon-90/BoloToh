import { useState } from 'react'
import React from 'react'
import Poem from './poem'
import Motivation from './motivation'
import Roast from './roast'
import Story from './story'
import Introduction from './introduce'
import Aiadvice from './advice'

const Main = () => {
  const [selectedTask, setSelectedTask] = useState(null);

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
        return <p>Please select an option above 👆</p>;
    }
  };

  return (
    <div className="p-4 flex flex-col justify-center items-center min-h-[calc(100vh-152px)] mx-2 md:mx-10 my-3 gap-2">
          <h2 className="text-2xl font-bold mb-4">What would you like to generate?</h2>
          <div className=" mb-6 flex justify-center flex-wrap gap-2">
            <button onClick={() => {setSelectedTask('poem') }} className="bg-blue-500 text-white px-4 py-2 rounded min-w-10 w-40">Poem</button>
            <button onClick={() => {setSelectedTask('Motivation') }} className="bg-blue-500 text-white px-4 py-2 rounded min-w-10 w-40">Motivation</button>
            <button onClick={() => {setSelectedTask('roast') }} className="bg-red-500 text-white px-4 py-2 rounded min-w-10 w-40">Roast</button>
            <button onClick={() => {setSelectedTask('story') }} className="bg-red-500 text-white px-4 py-2 rounded min-w-10 w-40">Story</button>
            <button onClick={() => {setSelectedTask('introduction') }} className="bg-green-500 text-white px-4 py-2 rounded min-w-10 w-40">Introduction</button>
            <button onClick={() => {setSelectedTask('advice') }} className="bg-green-500 text-white px-4 py-2 rounded min-w-10 w-40">AI Advice</button>
          </div>

      <div className="mt-4">
        {renderComponent()}
      </div>
    </div>
  );
};

export default Main
