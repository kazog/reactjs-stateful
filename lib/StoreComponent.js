/**
 * Author: Meng
 * Create Date: 2022-01-09
 * Desc:
 */

import React from "react";

export class StoreComponent extends React.PureComponent {
  _store;

  constructor(props) {
    super(props);

    if (props.store != null) {
      this.setStore(props.store);
      if (props.onCreate) {
        props.onCreate();
      }
    }
  }

  setStore = (store) => {
    if (!this._store) {
      this._store = store;
    }
  }

  // 可以加一个默认空视图的提示
  render() {
    const children = this.props.children||null;
    if (typeof children == 'function') {
      return children();
    }else {
      return {children}
    }
  }

  // 界面加载渲染完成调用
  componentDidMount() {
    if (this._store != null && this._store.onShow) {
      this._store.onShow();
    }
  }

  // 界面刷新时调用
  componentDidUpdate() {
    if (this._store != null && this._store.onUpdate) {
      this._store.onUpdate();
    }
  }

  // 界面销毁是调用
  componentWillUnmount() {
    if (this._store != null && this._store.onDestroy) {
      this._store.onDestroy();
      this._store = null;
    }
  }
}
