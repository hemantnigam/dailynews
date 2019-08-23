import React from 'react';
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import ContentComponent from './components/ContentComponent/ContentComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <ContentComponent selectedMenu={'top-headlines'} apiKey={'51922cc858c247529af6180110ca4d20'}/>
    </div>
  );
}

export default App;
