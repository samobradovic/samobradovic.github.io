import React from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="app__main">
        <Home />
        <hr />
        <WorkExperience />
        <hr />
        <Education />
        <hr />
        <Projects />
        <hr />
        <Skills />
        <hr />
        <Contact />
      </main>
    </>
  );
}

export default App;
