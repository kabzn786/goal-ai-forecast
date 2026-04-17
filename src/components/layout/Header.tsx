import React from 'react';
import { Brain, Trophy, Menu, Bell, User, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-500/10 bg-slate-950/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 p-2 shadow-lg shadow-emerald-500/20">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="text-lg font-bold tracking-tight text-white leading-none">AI SCOUT</span>
            <span className="text-[10px] font-medium text-emerald-400 uppercase tracking-widest">Prediction Engine</span>
          </div>
        </div>

        <div className="hidden max-w-md flex-1 px-8 md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <Input 
              placeholder="Search matches, leagues, or teams..." 
              className="w-full bg-slate-900/50 border-slate-800 pl-10 text-slate-200 placeholder:text-slate-500 focus-visible:ring-emerald-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-emerald-400">
            <Bell className="h-5 w-5" />
          </Button>
          <div className="h-8 w-px bg-slate-800" />
          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-emerald-400">
            <User className="h-5 w-5" />
          </Button>
          <Button className="hidden md:inline-flex bg-emerald-600 hover:bg-emerald-500 text-white border-0">
            Go Premium
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden text-slate-400">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;