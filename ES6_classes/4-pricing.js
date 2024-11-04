import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(TheAmount) {
    if ((typeof TheAmount) !== "number") {
      throw new TypeError("Amount must be a number");
    }
    this._amount = TheAmount;
  }

  get currency() {
    return this._currency;
  }

  set currency(TheCurrency) {
    this._currency = TheCurrency;
  }

  displayFullPrice() {
    // When a new obj is created, it assumed that the Currency att
    // will have two atts, name & code
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
