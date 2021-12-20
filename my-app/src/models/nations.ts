export enum Nation_Name {
  AIR_NOMAD = 'Air Nomad',
  WATER_TRIBE = 'Water Tribe',
  FIRE_NATION = 'Fire Nation',
  EARTH_KINGDOM = 'Earth Kingdom',
}

export interface Nation {
  symbol: string;
  nationClassName: string;
  name: Nation_Name;
}

export const airNation: Nation = {
  symbol: 'air',
  nationClassName: 'air-n',
  name: Nation_Name.AIR_NOMAD,
};

export const fireNation: Nation = {
  symbol: 'whatshot',
  nationClassName: 'fire-n',
  name: Nation_Name.FIRE_NATION,
};

export const earthNation: Nation = {
  symbol: 'public',
  nationClassName: 'earth-n',
  name: Nation_Name.EARTH_KINGDOM,
};

export const waterNation: Nation = {
  symbol: 'water',
  nationClassName: 'water-n',
  name: Nation_Name.WATER_TRIBE,
};
