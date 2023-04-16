// App.tsx
import React from 'react';
import HeaderBar from '../components/Header/HeaderBar';
import Resume from '../components/Resume/Resume'
import Projects from '../components/Projects/ProjectCardsSection'
// import Welcome from '../components/Welcome/'
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="pageWrapper">
        <HeaderBar />
        {/* <Welcome /> */}
        <Resume />
      </div>
      <Projects />
    </div>
  );
};

export default App;
