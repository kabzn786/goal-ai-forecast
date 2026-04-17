import React from 'react';
import { Match } from '@/types';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface MatchCardProps {
  match: Match;
  onSelect: (match: Match) => void;
}

const MatchCard: React.FC<MatchCardProps> = ({ match, onSelect }) => {
  const getOutcomeColor = (val: number) => {
    if (val > 50) return 'text-emerald-400';
    if (val > 40) return 'text-cyan-400';
    return 'text-slate-400';
  };

  return (
    <Card 
      className="group relative overflow-hidden border-slate-800 bg-slate-900 transition-all hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/5 cursor-pointer"
      onClick={() => onSelect(match)}
    >
      <div className="absolute top-0 right-0 p-2">
        <Badge variant="outline" className="bg-slate-950/50 text-[10px] text-emerald-400 border-emerald-500/20">
          {match.predictions.confidence}% Confidence
        </Badge>
      </div>

      <div className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg">{match.leagueLogo}</span>
            <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{match.league}</span>
          </div>
          <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Today, 20:00</span>
        </div>

        <div className="grid grid-cols-3 items-center gap-4">
          <div className="flex flex-col items-center gap-2 text-center">
            <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="h-12 w-12 rounded-full border-2 border-slate-800 p-1 group-hover:border-emerald-500/30 transition-colors" />
            <span className="text-sm font-bold text-white line-clamp-1">{match.homeTeam.name}</span>
            <div className="flex gap-1">
              {match.homeTeam.form.map((res, i) => (
                <span key={i} className={cn("h-1.5 w-1.5 rounded-full", res === 'W' ? 'bg-emerald-500' : res === 'D' ? 'bg-slate-500' : 'bg-red-500')} />
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-1">
            <div className="rounded-full bg-slate-800/50 px-3 py-1 text-xs font-bold text-slate-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
              VS
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 text-center">
            <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="h-12 w-12 rounded-full border-2 border-slate-800 p-1 group-hover:border-emerald-500/30 transition-colors" />
            <span className="text-sm font-bold text-white line-clamp-1">{match.awayTeam.name}</span>
            <div className="flex gap-1">
              {match.awayTeam.form.map((res, i) => (
                <span key={i} className={cn("h-1.5 w-1.5 rounded-full", res === 'W' ? 'bg-emerald-500' : res === 'D' ? 'bg-slate-500' : 'bg-red-500')} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-slate-950/50 p-3">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Brain className="h-3 w-3 text-emerald-400" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">AI Prediction</span>
            </div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="h-3 w-3 text-slate-600" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs">Weighted average of 4 advanced algorithms</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="flex flex-col items-center p-1">
              <span className="text-[10px] font-medium text-slate-500 uppercase">1</span>
              <span className={cn("text-lg font-black", getOutcomeColor(match.predictions.win))}>{match.predictions.win}%</span>
            </div>
            <div className="flex flex-col items-center p-1 border-x border-slate-800">
              <span className="text-[10px] font-medium text-slate-500 uppercase">X</span>
              <span className={cn("text-lg font-black", getOutcomeColor(match.predictions.draw))}>{match.predictions.draw}%</span>
            </div>
            <div className="flex flex-col items-center p-1">
              <span className="text-[10px] font-medium text-slate-500 uppercase">2</span>
              <span className={cn("text-lg font-black", getOutcomeColor(match.predictions.loss))}>{match.predictions.loss}%</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default MatchCard;