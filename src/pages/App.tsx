// App.tsx
import React from 'react';
import HeaderBar from '../components/Header/HeaderBar';
import Resume from '../components/Resume/Resume'
// import Welcome from '../components/Welcome/'
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <HeaderBar />
      <main className="mainContent">
        {/* <Welcome /> */}
        <Resume />
      </main>
    </div>
  );
};

export default App;
