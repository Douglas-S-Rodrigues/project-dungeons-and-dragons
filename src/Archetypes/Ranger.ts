import Archetype from './Archetype';
import { EnergyType } from '../Energy';
      
export default class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';
  static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Ranger._createdArchetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._createdArchetypeInstances;
  }
}