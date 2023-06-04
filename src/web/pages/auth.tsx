import React from 'react';
import { Auth } from '@web/components/Auth';
import { FixedNav } from '../components';

export function AuthPage() {
  return (
    <div className="page">
      <FixedNav />
      <Auth />
    </div>
  );
}
