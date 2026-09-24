export type ThemeMode = 'light' | 'dark';

export interface ThemeColors {
  ink: string;
  paper: string;
  paper2: string;
  card: string;
  line: string;
  forest: string;
  forest2: string;
  rust: string;
  gold: string;
  muted: string;
  subtle: string;
  green: string;
  topbarBg: string;
  sectionHero: string;
}

export const lightColors: ThemeColors = {
  ink: '#15201c',
  paper: '#f1f4f0',
  paper2: '#e6ebe4',
  card: '#ffffff',
  line: '#dde3da',
  forest: '#1f4d3f',
  forest2: '#2c6a55',
  rust: '#c0392b',
  gold: '#b98a2e',
  muted: '#6b7670',
  subtle: '#9aa39c',
  green: '#1aa860',
  topbarBg: '#1f4d3f',
  sectionHero: '#1f4d3f',
};

export const darkColors: ThemeColors = {
  ink: '#ece7d8',
  paper: '#14110c',
  paper2: '#1d1913',
  card: '#1b1710',
  line: '#332c20',
  forest: '#5fae93',
  forest2: '#7cc4aa',
  rust: '#d2745a',
  gold: '#d8a84a',
  muted: '#9a9384',
  subtle: '#6b6557',
  green: '#2ecc71',
  topbarBg: '#1d4034',
  sectionHero: '#1d4034',
};
