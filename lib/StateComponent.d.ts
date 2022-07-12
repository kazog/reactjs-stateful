/**
 * Create By: Meng
 * Desc:
 */

import React, { PureComponent } from "react";
import { State } from "./State";

interface Props {
  state: State;
  children: () => React.ReactElement;
}
// PureComponent<P = {}, S = {}, SS = any> P-props; S-state; SS-
// eslint-disable-next-line prettier/prettier
export class StateComponent<P = Props, S = {}, SS = any> extends PureComponent<P, S, SS > {
  private _state: State | undefined;
  public setPageState(_state: State): void;
}
