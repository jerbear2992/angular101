import {
  airNation,
  earthNation,
  fireNation,
  Nation,
  waterNation,
} from './nations';

export interface Character {
  name: string;
  age: number;
  nationality: Nation;
}

export const characters: Character[] = [
  {
    name: 'Aang',
    age: 112,
    nationality: airNation,
  },
  {
    name: 'Zuko',
    age: 16,
    nationality: fireNation,
  },
  {
    name: 'Katara',
    age: 14,
    nationality: waterNation,
  },
  {
    name: 'Toph',
    age: 12,
    nationality: earthNation,
  },
];
