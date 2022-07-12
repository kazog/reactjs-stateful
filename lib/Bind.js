/**
 * Create By: Meng
 * Create Date: 2022-01-09
 * Desc:
 */

// 绑定 Store
export function BindStore(store={}) {
  return function(target) {
    target.prototype._store = store;
  }
}
