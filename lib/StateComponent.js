/**
 * Author: Meng
 * Desc:
 */

import React from "react";
export class StateComponent extends React.PureComponent {
  _state;

  constructor(props) {
    super(props);

    if (props.state != null) {
      this.setPageState(props.state);
      if (props.onCreate) {
        props.onCreate();
      }
    }
  }

  setPageState = (state) => {
    if (!this._state) {
      this._state = state;
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
    if (this._state != null && this._state.onShow) {
      this._state.onShow();
    }
  }

  // 界面刷新时调用
  componentDidUpdate() {
    if (this._state != null && this._state.onUpdate) {
      this._state.onUpdate();
    }
  }

  // 界面销毁是调用
  componentWillUnmount() {
    if (this._state != null && this._state.onDestroy) {
      this._state.onDestroy();
      this._state = null;
    }
  }
}
