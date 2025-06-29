import './App.css'
import { useState } from 'react';
import DevSection from './components/DevSection';
import DesignSection from './components/DesignSection';
import PersonalSection from './components/PersonalSection';


function App() {

  const [selectedSection, setSelectedSection] = useState('dev');

  const themes = {
    dev: 'bg-dev',
    design: 'bg-design',
    personal: 'bg-personal'
  };



  return (
    <>
      {/* Background Gradient Layers */}
      <div className="backgrounds">
        <div className={`bg-layer ${selectedSection === 'dev' ? 'visible' : ''} bg-dev`} />
        <div className={`bg-layer ${selectedSection === 'design' ? 'visible' : ''} bg-design`} />
        <div className={`bg-layer ${selectedSection === 'personal' ? 'visible' : ''} bg-personal`} />
      </div>

      {/* Main App Container */}
      <div className="app-container">

        {/* Navbar or Button Selection */}
        <div className="nav-buttons">
          <button onClick={() => setSelectedSection('dev')}>Dev</button>
          <button onClick={() => setSelectedSection('design')}>Design</button>
          <button onClick={() => setSelectedSection('personal')}>Personal</button>
        </div>

        {/* Dynamic Intro Text */}
        <h1>
          {selectedSection === 'dev' && "Hi, I'm Keiji. I'm a developer."}
          {selectedSection === 'design' && "Hi, I'm Keiji. I'm a graphic designer."}
          {selectedSection === 'personal' && "Hi, I'm Keiji. Here's a bit about me."}
        </h1>

        {/* Section Content */}
        {selectedSection === 'dev' && <DevSection />}
        {selectedSection === 'design' && <DesignSection />}
        {selectedSection === 'personal' && <PersonalSection />}

      </div>
    </>
  );
}

export default App;