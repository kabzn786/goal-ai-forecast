import React from 'react';
import { LayoutDashboard, Calendar, Trophy, BarChart3, Settings, ShieldCheck, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LEAGUES } from '@/data/mockData';

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden w-64 flex-col border-r border-slate-800 bg-slate-950 px-4 py-6 md:flex">
      <div className="mb-8 px-2">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">Menu</h2>
        <nav className="space-y-1">
          <NavItem icon={<LayoutDashboard className="h-4 w-4" />} label="Dashboard" active />
          <NavItem icon={<Calendar className="h-4 w-4" />} label="Fixtures" />
          <NavItem icon={<Trophy className="h-4 w-4" />} label="Top Leagues" />
          <NavItem icon={<BarChart3 className="h-4 w-4" />} label="AI Performance" />
          <NavItem icon={<ShieldCheck className="h-4 w-4" />} label="Safe Accas" />
        </nav>
      </div>

      <div className="mb-8 px-2">
        <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-500">Popular Leagues</h2>
        <nav className="space-y-1">
          {LEAGUES.map((league) => (
            <button
              key={league.id}
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-900 hover:text-white"
            >
              <span>{league.logo}</span>
              {league.name}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto rounded-2xl bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 p-4 border border-emerald-500/20">
        <div className="mb-2 flex items-center gap-2">
          <Zap className="h-4 w-4 text-emerald-400" />
          <span className="text-sm font-bold text-white">AI Scout Pro</span>
        </div>
        <p className="mb-3 text-xs text-slate-400">Get access to high-accuracy algorithms and real-time insights.</p>
        <button className="w-full rounded-lg bg-emerald-600 py-2 text-xs font-bold text-white hover:bg-emerald-500 transition-all active:scale-95">
          Upgrade Now
        </button>
      </div>
    </aside>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, active }) => (
  <button
    className={cn(
      "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
      active 
        ? "bg-emerald-500/10 text-emerald-400" 
        : "text-slate-400 hover:bg-slate-900 hover:text-white"
    )}
  >
    {icon}
    {label}
  </button>
);

export default Sidebar;