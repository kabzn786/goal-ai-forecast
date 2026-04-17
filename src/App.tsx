import React from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import PredictorDashboard from './components/dashboard/PredictorDashboard';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className="flex h-screen w-full flex-col bg-slate-950 font-sans text-slate-200 antialiased selection:bg-emerald-500/30">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-hidden relative">
          <PredictorDashboard />
        </main>
      </div>
      <Toaster position="top-right" theme="dark" closeButton />
    </div>
  );
}

export default App;