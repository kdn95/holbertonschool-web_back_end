export default class Building {
  //abstract class = cannot directly
  //create object from this
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    };
  }

  get sqft() {
    return `${this._sqft}`;
  }
  
  evacuationWarningMessage() {
    if (this.constructor !== Building) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    };
  }
}