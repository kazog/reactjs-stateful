/**
 * Create By: Meng
 * Desc:
 */

export class State {
  _stateTag = Date.now();
  _navigation = null;

  onCreate() { };
  onShow() { };
  onUpdate() { };
  onDestroy() { };

  setNavigation = (navigation) => {
    console.log(navigation)
    this._navigation = navigation;
  }
  push(path, params = {}) {
    if (this._navigation) {
      this._navigation.push(path, params);
    }
  }
  back() {
    if (this._navigation) {
      this._navigation.goBack();
    }
  }
  navigate(name, params = {}) {
    if (this._navigation) {
      this._navigation.navigate({ name, params });
    }
  }
  params() {
    if (this._navigation) {

    }
  }
}
