import React from 'react';
import Header from './components/HeaderComponent';
import Main from './components/MainComponent';

import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <header>
        <Header />
      </header>
    </div>
    <div className="App">
      <main>
        <Main />
      </main>
    </div>
    </>
  );
}

export default App;
