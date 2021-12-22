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
  {
    name: 'Azula',
    age: 17,
    nationality: fireNation,
  },
  {
    name: 'Uncle Iroh',
    age: 55,
    nationality: fireNation,
  },
  {
    name: 'Monk Gyatso',
    age: 40,
    nationality: airNation,
  },
  {
    name: 'Appa',
    age: 25,
    nationality: airNation,
  },
  {
    name: 'Momo',
    age: 5,
    nationality: airNation,
  },
  {
    name: 'Suki',
    age: 15,
    nationality: earthNation,
  },
  {
    name: 'Princess Yue',
    age: 13,
    nationality: waterNation,
  },
  {
    name: 'Master Pakku',
    age: 58,
    nationality: waterNation,
  },
  {
    name: 'Long Feng',
    age: 45,
    nationality: earthNation,
  },
  {
    name: 'Smellerbee',
    age: 10,
    nationality: earthNation,
  },
  {
    name: 'Firelord Ozai',
    age: 48,
    nationality: fireNation,
  },
  {
    name: 'Admiral Zhao',
    age: 38,
    nationality: fireNation,
  },
  {
    name: 'Gran Gran',
    age: 66,
    nationality: waterNation,
  },
  {
    name: 'Sokka',
    age: 15,
    nationality: waterNation,
  },
  {
    name: 'King Bumi',
    age: 113,
    nationality: earthNation,
  },
  {
    name: 'Cabbage Man',
    age: 30,
    nationality: earthNation,
  },
  {
    name: 'Jeong Jeong',
    age: 52,
    nationality: fireNation,
  },
];
