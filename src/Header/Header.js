import React from 'react';

const Header = () => {
  return (
    <header className="flex font-bold items-center justify-center p-3 text-gray-400 border-b border-gray-800 mb-16">
      <h1 className="mr-5 text-yellow-400 text-xl">React Memory Game</h1>
      <h3 className="mr-auto">Attempts: 1</h3>
      <button className="bg-yellow-400 font-bold px-4 py-2 rounded text-black">Restart</button>
    </header>
  )
}

export default Header;