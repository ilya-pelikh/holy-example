import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Code from './pages/code';
import Intro from './pages/intro';
import NotFound from './pages/notFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Code />} />
        <Route path="/code" element={<Intro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
