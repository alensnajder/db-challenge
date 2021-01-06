class Metric {
  constructor(key, value) {
    this._key = key;
    this._value = value;
    this._date = new Date().toISOString();
  }

  get key() {
    return this._key;
  }

  get value() {
    return this._value;
  }

  get date() {
    return this._date;
  }
}

module.exports = Metric;