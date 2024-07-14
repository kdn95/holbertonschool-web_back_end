const util = require('util');

export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
    
  }
  // have no idea why util.inspect.custom is used (did not learn)
  [util.inspect.custom]() {
    return `${this.constructor.name} [${this._code}] { _name: '${this._name}', _code: '${this._code}'}`;
  }
  //override toString() funct.
  // 
  toString() {
    return `[object ${this._code}]`;
  }
}
