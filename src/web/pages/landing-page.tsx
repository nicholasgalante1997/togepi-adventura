import React from 'react';
import styled from 'styled-components';
import { Nav } from '../components/nav/component';

export function LandingPage() {
  return (
    <React.StrictMode>
      <div className="page">
        <Nav />
      </div>
    </React.StrictMode>
  );
}
