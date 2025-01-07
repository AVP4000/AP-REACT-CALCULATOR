'use client';

// any component that uses useAuth needs this because if a component directly imports useAuth, it needs to be a client component since useAuth uses React hooks.

import React from 'react';
import Calculator from '../components/Calculator';

function Home() {
  return (
    <div>
      <Calculator />
    </div>
  );
}

export default Home;
