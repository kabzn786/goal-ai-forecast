export interface Team {
  id: string;
  name: string;
  logo: string;
  form: ('W' | 'D' | 'L')[];
}

export interface Match {
  id: string;
  homeTeam: Team;
  awayTeam: Team;
  date: string;
  league: string;
  leagueLogo: string;
  status: 'upcoming' | 'live' | 'finished';
  predictions: {
    win: number;
    draw: number;
    loss: number;
    confidence: number;
    algorithms: {
      name: string;
      prediction: string;
      weight: number;
    }[];
  };
}

export interface League {
  id: string;
  name: string;
  country: string;
  logo: string;
}