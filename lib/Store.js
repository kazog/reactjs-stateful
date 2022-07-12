/**
 * Author: Meng
 * Create Date: 2022-01-09
 * Desc:
 */

export class Store {
  _storeTag = Date.now();
  _navigation = null;

  onCreate() { };
  onShow() { };
  onUpdate() { };
  onDestroy() { };
  init() { };

  setNavigate = (navigation={}) => {
    // console.log(navigation.state);
    this._navigation = navigation;
  }

  push(path, params = {}) {
    if (this._navigation && this._navigation.push) {
      this._navigation.push(path, params);
    }
  }
  replace(path, params = {}) {
    if (this._navigation && this._navigation.replace) {
      this._navigation.replace(path, params);
    }
  }
  back() {
    if (this._navigation && this._navigation.goBack) {
      this._navigation.goBack();
    }
  }
  navigate(name, params = {}) {
    if (this._navigation && this._navigation.navigate) {
      this._navigation.navigate({ name, params });
    }
  }
  params() {
    if (this._navigation && this._navigation.state) {
      return this._navigation.state.params || {};
    }
    return {};
  }
  route() {
    if (this._navigation && this._navigation.state) {
      return this._navigation.state.routeName || '';
    }
    return '';
  }
}
