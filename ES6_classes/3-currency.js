export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get code() {
    return this._code;
  }

  set code(TheCode) {
    if ((typeof TheCode) !== 'string') {
      throw new TypeError("Code must be a string/symbol")
    }
    this._code = TheCode;
  }

  get name() {
    return this._name;
  }

  set name(NameCurrency) {
    if ((typeof NameCurrency) !== 'string') {
      throw new TypeError("Name must be a string");
    }
    this._name = NameCurrency;
  }
// no parameters but use "this." to indicate self defined properties
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}