import React from 'react';
import RandomUser from './components/RandomUser';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Random User Generator</h1>
      <RandomUser />
    </div>
  );
};

export default App;
