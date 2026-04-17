import React from 'react';
import { Match } from '@/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Brain, TrendingUp, History, Network, BarChart } from 'lucide-react';

interface PredictionDetailsProps {
  match: Match;
  isOpen: boolean;
  onClose: () => void;
}

const PredictionDetails: React.FC<PredictionDetailsProps> = ({ match, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl border-slate-800 bg-slate-950 p-0 overflow-hidden">
        <div className="relative h-32 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 p-6 flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          <div className="z-10 flex w-full items-center justify-between px-4">
             <div className="flex flex-col items-center gap-2">
                <img src={match.homeTeam.logo} alt="" className="h-12 w-12 rounded-full border-2 border-white/20" />
                <span className="text-sm font-bold text-white">{match.homeTeam.name}</span>
             </div>
             <div className="flex flex-col items-center">
                <Badge className="bg-emerald-500 text-white hover:bg-emerald-400">PREDICTION: HOME WIN</Badge>
                <span className="mt-2 text-2xl font-black text-white">VS</span>
             </div>
             <div className="flex flex-col items-center gap-2">
                <img src={match.awayTeam.logo} alt="" className="h-12 w-12 rounded-full border-2 border-white/20" />
                <span className="text-sm font-bold text-white">{match.awayTeam.name}</span>
             </div>
          </div>
        </div>

        <div className="p-6">
          <DialogHeader className="mb-6">
            <DialogTitle className="flex items-center gap-2 text-xl font-bold text-white">
              <Brain className="h-5 w-5 text-emerald-400" />
              Algorithm Deep Dive
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                <Network className="h-4 w-4" /> Consensus Analysis
              </h4>
              <div className="space-y-3">
                {match.predictions.algorithms.map((algo, i) => (
                  <div key={i} className="rounded-lg bg-slate-900 p-3 border border-slate-800">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-300">{algo.name}</span>
                      <span className="text-[10px] font-bold text-emerald-400">{algo.prediction}</span>
                    </div>
                    <Progress value={algo.weight} className="h-1.5 bg-slate-800" />
                    <div className="mt-1 flex justify-between">
                      <span className="text-[9px] text-slate-600 uppercase">Weighting</span>
                      <span className="text-[9px] text-slate-600">{algo.weight}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" /> AI Confidence
                </h4>
                <div className="relative flex h-32 items-center justify-center rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="text-center">
                    <span className="text-4xl font-black text-emerald-400">{match.predictions.confidence}%</span>
                    <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Global Confidence Score</p>
                  </div>
                </div>
              </section>

              <section>
                <h4 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                  <History className="h-4 w-4" /> Head to Head
                </h4>
                <div className="flex items-center justify-between rounded-xl bg-slate-900 p-4 border border-slate-800">
                  <div className="text-center">
                    <span className="text-xl font-bold text-white">4</span>
                    <p className="text-[8px] text-slate-500">WINS</p>
                  </div>
                  <div className="h-8 w-px bg-slate-800" />
                  <div className="text-center">
                    <span className="text-xl font-bold text-white">2</span>
                    <p className="text-[8px] text-slate-500">DRAWS</p>
                  </div>
                  <div className="h-8 w-px bg-slate-800" />
                  <div className="text-center">
                    <span className="text-xl font-bold text-white">1</span>
                    <p className="text-[8px] text-slate-500">WINS</p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-emerald-500/5 p-4 border border-emerald-500/10">
            <h4 className="mb-2 text-xs font-bold text-emerald-400 uppercase flex items-center gap-2">
              <BarChart className="h-4 w-4" /> Pro Tip
            </h4>
            <p className="text-sm text-slate-400">
              The neural network highlights a significant scoring potential in the second half. Consider Over 1.5 Goals for higher value.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PredictionDetails;