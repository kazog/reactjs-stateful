/**
 * Create By: Meng
 * Create Date: 2022-01-09
 * Desc:
 */

// 绑定 Store
export function BindStore(store={}) {
  return function(target) {
    const _store = new store();
    Object.assign(target.prototype, _store);
  }
}
