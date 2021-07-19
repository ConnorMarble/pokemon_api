export interface IPokemon {
  name: string;
  url: string;
}

export interface IType {
  name: string;
}

export interface IObjectKeys {
  [key: string]: string;
}

export interface IDetails {
  name: string;
  id: string;
  weight: string;
  height: string;
  abilities: {
    [key: string]: IObjectKeys;
  }[];
  types: {
    [type: string]: IType;
  }[];
  sprites: {
    front_default: string;
  };
}
