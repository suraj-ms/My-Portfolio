import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';

import Home from './pages/Home';
import Education from './pages/Education'
import Experience from './pages/Experience'
import Project from './pages/Project'
import ContactMe from './pages/ContactMe'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="education" element={<Education />} />
        <Route path="experience" element={<Experience />} />
        <Route path="project" element={<Project />} />
        <Route path="contact" element={<ContactMe />} />
      </Route>
    </Routes>
  </Router>
);
