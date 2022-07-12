/**
 * Author: Meng
 * Desc:
 */

import React, { PureComponent } from "react";
import { State } from "../lib/State";

interface Props {
  state: State;
  children: () => React.ReactElement;
}
// PureComponent<P = {}, S = {}, SS = any> P-props; S-state; SS-
// eslint-disable-next-line prettier/prettier
export class StateComponent<P = Props, S = {}, SS = any> extends PureComponent<P, S, SS> {
  private _state: State | undefined;

  constructor(props: any) {
    super(props);
    if (props.state != null) {
      this.setPageState(props.state);
      if (props.onCreate) {
        props.onCreate();
      }
    }
  }

  public setPageState = (state: State) => {
    if (!this._state) {
      this._state = state;
    }
  }

  // 可以加一个默认空视图的提示
  render() {
    const children = this.props.children;
    if (children) {
      return typeof children == "function" ? children() : children;
    }
    return null;
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
      this._state = undefined;
    }
  }
}
