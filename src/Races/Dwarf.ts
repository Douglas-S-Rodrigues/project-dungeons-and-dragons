import Race from './Race';

export default class Dwarf extends Race {
  static _createdRacesInstances = 0;
  private _maxLifePoints: number;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._createdRacesInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._createdRacesInstances;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}