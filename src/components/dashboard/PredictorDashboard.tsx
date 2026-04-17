import React, { useState } from 'react';
import { MOCK_MATCHES } from '@/data/mockData';
import MatchCard from './MatchCard';
import { Match } from '@/types';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { TrendingUp, Clock, Star, Sparkles, Filter, ChevronRight } from 'lucide-react';
import PredictionDetails from '../predictions/PredictionDetails';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const PredictorDashboard: React.FC = () => {
  const [selectedMatch, setSelectedMatch] = useState<Match | null>(null);

  return (
    <div className="flex-1 overflow-y-auto bg-slate-950">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full overflow-hidden border-b border-slate-800">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/90e04768-363d-4458-b910-27497c81b4e6/hero-background-d311b450-1776385575869.webp" 
          alt="Stadium" 
          className="h-full w-full object-cover opacity-40 grayscale-[0.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6 md:p-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-3 py-1 border border-emerald-500/30 backdrop-blur-sm">
            <Sparkles className="h-3 w-3 text-emerald-400" />
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Global AI Model v4.2 Active</span>
          </div>
          <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white md:text-6xl">
            Predict with <span className="text-emerald-500 underline decoration-emerald-500/30 underline-offset-8">Precision.</span>
          </h1>
          <p className="mt-4 max-w-lg text-lg text-slate-300">
            Harnessing 14+ neural networks to provide the world's most accurate soccer predictions across 200+ leagues.
          </p>
          <div className="mt-8 flex gap-4">
             <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-12 px-8">
               View Live Odds
             </Button>
             <Button variant="outline" className="border-slate-700 bg-slate-900/50 text-white font-bold h-12 px-8 backdrop-blur-md">
               AI Performance <ChevronRight className="ml-2 h-4 w-4" />
             </Button>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-12">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-white">
              Today's <span className="text-emerald-500">Value Picks</span>
            </h2>
            <p className="mt-1 text-slate-400">High confidence predictions based on current form and neural analysis.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="outline" className="border-slate-800 bg-slate-900 text-slate-300 hover:bg-slate-800">
              <Filter className="mr-2 h-4 w-4" /> Filters
            </Button>
            <div className="flex h-10 items-center gap-2 rounded-lg bg-emerald-500/10 px-4 py-2 border border-emerald-500/20">
              <Sparkles className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-bold text-emerald-400">92% AI Accuracy Today</span>
            </div>
          </div>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard label="Total Predictions" value="1,248" trend="+12%" />
          <StatsCard label="Win Rate" value="78.4%" trend="+2.1%" color="emerald" />
          <StatsCard label="Yield" value="+14.2%" trend="+0.5%" color="cyan" />
          <StatsCard label="Active Algorithms" value="14" sub="Neural, Elo, Poisson+" />
        </div>

        <Tabs defaultValue="hot" className="w-full">
          <div className="mb-6 flex items-center justify-between">
            <TabsList className="bg-slate-900 border-slate-800">
              <TabsTrigger value="hot" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                <TrendingUp className="mr-2 h-4 w-4" /> Top Predictions
              </TabsTrigger>
              <TabsTrigger value="today" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                <Clock className="mr-2 h-4 w-4" /> Today's Fixtures
              </TabsTrigger>
              <TabsTrigger value="watchlist" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                <Star className="mr-2 h-4 w-4" /> Watchlist
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="hot" className="mt-0">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {MOCK_MATCHES.map((match) => (
                <MatchCard 
                  key={match.id} 
                  match={match} 
                  onSelect={(m) => setSelectedMatch(m)} 
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="today">
            <div className="flex h-40 items-center justify-center rounded-2xl border border-dashed border-slate-800 text-slate-500">
              No additional fixtures scheduled for today.
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {selectedMatch && (
        <PredictionDetails 
          match={selectedMatch} 
          isOpen={!!selectedMatch} 
          onClose={() => setSelectedMatch(null)} 
        />
      )}
    </div>
  );
};

interface StatsCardProps {
  label: string;
  value: string;
  trend?: string;
  sub?: string;
  color?: 'emerald' | 'cyan' | 'slate';
}

const StatsCard: React.FC<StatsCardProps> = ({ label, value, trend, sub, color = 'slate' }) => {
  const colorMap = {
    emerald: 'text-emerald-400',
    cyan: 'text-cyan-400',
    slate: 'text-white',
  };

  return (
    <Card className="border-slate-800 bg-slate-900/50 p-6">
      <p className="text-xs font-medium uppercase tracking-widest text-slate-500">{label}</p>
      <div className="mt-2 flex items-baseline justify-between">
        <h3 className={cn("text-2xl font-black", colorMap[color])}>{value}</h3>
        {trend && <span className="text-xs font-bold text-emerald-500">{trend}</span>}
      </div>
      {sub && <p className="mt-1 text-[10px] text-slate-600">{sub}</p>}
    </Card>
  );
};

export default PredictorDashboard;