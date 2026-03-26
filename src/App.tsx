/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import Dashboard from './components/Dashboard';
import Classes from './components/Classes';
import QuranStudy from './components/QuranStudy';
import Financials from './components/Financials';
import Admissions from './components/Admissions';
import Settings from './components/Settings';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface text-on-surface font-sans selection:bg-secondary/30 selection:text-secondary">
        <Sidebar />
        <div className="pl-72">
          <TopBar />
          <main className="pt-24 pb-12 px-12 max-w-[1600px] mx-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/quran" element={<QuranStudy />} />
              <Route path="/financials" element={<Financials />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

