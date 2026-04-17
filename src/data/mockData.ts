import { Match, League } from '../types';

export const LEAGUES: League[] = [
  { id: 'pl', name: 'Premier League', country: 'England', logo: '🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
  { id: 'll', name: 'La Liga', country: 'Spain', logo: '🇪🇸' },
  { id: 'sa', name: 'Serie A', country: 'Italy', logo: '🇮🇹' },
  { id: 'bl', name: 'Bundesliga', country: 'Germany', logo: '🇩🇪' },
  { id: 'l1', name: 'Ligue 1', country: 'France', logo: '🇫🇷' },
  { id: 'ucl', name: 'Champions League', country: 'Europe', logo: '🇪🇺' },
];

export const MOCK_MATCHES: Match[] = [
  {
    id: '1',
    league: 'Premier League',
    leagueLogo: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    date: '2023-11-20T20:00:00Z',
    status: 'upcoming',
    homeTeam: {
      id: 'h1',
      name: 'London FC',
      logo: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=100&h=100&fit=crop',
      form: ['W', 'W', 'D', 'W', 'L'],
    },
    awayTeam: {
      id: 'a1',
      name: 'Manchester Utd',
      logo: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=100&h=100&fit=crop',
      form: ['L', 'W', 'W', 'D', 'W'],
    },
    predictions: {
      win: 58,
      draw: 22,
      loss: 20,
      confidence: 84,
      algorithms: [
        { name: 'Poisson Distribution', prediction: 'Home Win', weight: 25 },
        { name: 'Elo Rating System', prediction: 'Home Win', weight: 30 },
        { name: 'Neural Network (v4)', prediction: 'Home Win', weight: 35 },
        { name: 'Sentiment Analysis', prediction: 'Draw', weight: 10 },
      ],
    },
  },
  {
    id: '2',
    league: 'La Liga',
    leagueLogo: '🇪🇸',
    date: '2023-11-20T21:00:00Z',
    status: 'upcoming',
    homeTeam: {
      id: 'h2',
      name: 'Madrid Kings',
      logo: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=100&h=100&fit=crop',
      form: ['W', 'W', 'W', 'W', 'D'],
    },
    awayTeam: {
      id: 'a2',
      name: 'Barcelona Blau',
      logo: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=100&h=100&fit=crop',
      form: ['W', 'L', 'W', 'W', 'W'],
    },
    predictions: {
      win: 42,
      draw: 28,
      loss: 30,
      confidence: 72,
      algorithms: [
        { name: 'Poisson Distribution', prediction: 'Draw', weight: 25 },
        { name: 'Elo Rating System', prediction: 'Home Win', weight: 30 },
        { name: 'Neural Network (v4)', prediction: 'Home Win', weight: 35 },
        { name: 'Sentiment Analysis', prediction: 'Away Win', weight: 10 },
      ],
    },
  },
  {
    id: '3',
    league: 'Champions League',
    leagueLogo: '🇪🇺',
    date: '2023-11-21T19:45:00Z',
    status: 'upcoming',
    homeTeam: {
      id: 'h3',
      name: 'Munich Giants',
      logo: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=100&h=100&fit=crop',
      form: ['W', 'W', 'W', 'W', 'W'],
    },
    awayTeam: {
      id: 'a3',
      name: 'Paris Stars',
      logo: 'https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=100&h=100&fit=crop',
      form: ['W', 'W', 'D', 'W', 'L'],
    },
    predictions: {
      win: 51,
      draw: 24,
      loss: 25,
      confidence: 68,
      algorithms: [
        { name: 'Poisson Distribution', prediction: 'Home Win', weight: 25 },
        { name: 'Elo Rating System', prediction: 'Home Win', weight: 30 },
        { name: 'Neural Network (v4)', prediction: 'Draw', weight: 35 },
        { name: 'Sentiment Analysis', prediction: 'Home Win', weight: 10 },
      ],
    },
  },
];