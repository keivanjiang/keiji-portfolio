import './App.css';
import { useState, useEffect } from 'react';
import DevSection from './components/DevSection';
import DesignSection from './components/DesignSection';
import PersonalSection from './components/PersonalSection';

// Section title mappings
const sectionTitles = {
  dev: 'developer',
  design: 'graphic designer',
  personal: 'human',
};

function App() {
  // State
  const [selectedSection, setSelectedSection] = useState('dev');
  const [typedText, setTypedText] = useState(sectionTitles['dev']);
  const [showCursor, setShowCursor] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [targetWord, setTargetWord] = useState(sectionTitles['dev']);

  // Theme colors
  const themes = {
    dev: 'bg-dev',
    design: 'bg-design',
    personal: 'bg-personal',
  };

  // Watch for section change → trigger delete + retype
  useEffect(() => {
    setTargetWord(sectionTitles[selectedSection]);
    setIsDeleting(true);
    setShowCursor(true);
  }, [selectedSection]);

  // Typing / deleting effect
  useEffect(() => {
    if (!targetWord) return;

    const typingSpeed = 60;
    const deletingSpeed = 40;
    let timeout;

    if (isDeleting) {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(typedText.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
      }
    } else {
      if (typedText !== targetWord) {
        timeout = setTimeout(() => {
          setTypedText(targetWord.slice(0, typedText.length + 1));
        }, typingSpeed);
      } else {
        setShowCursor(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, targetWord]);

  // JSX
  return (
    <>
      {/* Background Gradient Layers */}
      <div className="backgrounds">
        <div className={`bg-layer ${selectedSection === 'dev' ? 'visible' : ''} bg-dev`} />
        <div className={`bg-layer ${selectedSection === 'design' ? 'visible' : ''} bg-design`} />
        <div className={`bg-layer ${selectedSection === 'personal' ? 'visible' : ''} bg-personal`} />
      </div>

      <div className="site-header">
  <div className="header-content">
    <div className="name">Keivan Jiang</div>
    <div className="header-links">
      <a href="mailto:keivanjiangm@gmail.com">Email</a>
      <a href="https://www.linkedin.com/in/keivan-jiang/" target="_blank" rel="noreferrer">LinkedIn</a>
    </div>
  </div>

  <div className="nav-buttons">
    <button
      onClick={() => setSelectedSection('dev')}
      className={selectedSection === 'dev' ? 'active' : ''}
    >
      Dev
    </button>
    <button
      onClick={() => setSelectedSection('design')}
      className={selectedSection === 'design' ? 'active' : ''}
    >
      Design
    </button>
    <button
      onClick={() => setSelectedSection('personal')}
      className={selectedSection === 'personal' ? 'active' : ''}
    >
      Personal
    </button>
  </div>
</div>



      {/* Main App Container */}
      <div className="app-container">



        {/* Typing Animated Intro */}
        <h1>
          Hi, I'm Keiji. I'm a{' '}
          <span className="typing">
            {typedText}
            {showCursor && <span className="cursor">_</span>}
          </span>
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
