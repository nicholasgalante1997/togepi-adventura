import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './pages';

function DevelopmentClientApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<DevelopmentClientApp />, document.getElementById('devroot'));
