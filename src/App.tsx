import React, { useState } from 'react';
import './App.css';
import NavButton from './Navbutton';
import HandBuilt from './hand-built/HandBuilt';

function App() {
  const [activeGame, setActiveGame] = useState<'hand-built' | 'copilot' | 'gemini'>('hand-built')
  return (
    <>
      <header>
        <h1 className='text-3xl font-bold px-4 mb-2'>Tic Tac Toe</h1>
      </header>
      <body className='container'>
        <div className='flex border-b-2 border-black px-4 gap-1'>
          <NavButton onClick={() => setActiveGame('hand-built')}>Hand built</NavButton>
          <NavButton onClick={() => setActiveGame('copilot')}>Copilot</NavButton>
          <NavButton onClick={() => setActiveGame('gemini')}>Gemini</NavButton>
        </div>
        <div>
          <HandBuilt/>
        </div>
      </body>
    </>
  );
}

export default App;
