/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { InfographicBox } from './components/InfographicBox';

export default function App() {
  return (
    <main className="min-h-screen bg-stone-100 font-sans selection:bg-red-600 selection:text-white">
      <InfographicBox />
    </main>
  );
}

