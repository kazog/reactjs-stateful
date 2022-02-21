/**
 * Create By: Meng
 * Desc:
 */

 export class StateSource {
  data;
  _func;
  _error;

  constructor(e) {
    this.data = e;
  }

  add = (e) => {
    if (e) {
      if (this._check(e)) {
        if (this._func) {
          this._func(e);
        }
      }
    } else {
      if (this._error) {
        this._error(this.data, new Error("StateSource Add Err"));
      }
      return;
    }
    this._setData(e);
  };

  next = (e) => {
    if (e) {
      if (this._func) {
        this._func(e);
      }
    } else {
      if (this._error) {
        this._error(this.data, new Error("StateSource Next Err"));
      }
      return;
    }
    this._setData(e);
  };

  _setData = (e) => {
    if (typeof e == "object") {
      this.data = Object.create(e);
    } else {
      this.data = e;
    }
  };

  _check = (e) => {
    let data = this.data;
    if (typeof e == "object") {
      return !Object.is(e, data);
    } else {
      return data !== e;
    }
  };

  clone = (org, org2) => {
    return Object.assign(org, org2);
  };

  clone2 = (origin) => {
    let originProto = Object.getPrototypeOf(origin);
    return Object.assign(Object.create(originProto), origin);
  };

  subscribe = (func, error) => {
    this._func = func;
    this._error = error;
    return this;
  };

  unsubscribe = () => {
    this.data = undefined;
    this._func = undefined;
    this._error = undefined;
  };
}
