/**
 * Author: Meng
 * Create Date: 2022-01-09
 * Desc:
 */

import React, { PureComponent } from "react";
import { Store } from "./Store";

interface Props3 {
  store?: Store;
  children?: () => React.ReactElement;
}
// PureComponent<P = {}, S = {}, SS = any> P-props; S-state; SS-
// eslint-disable-next-line prettier/prettier
export class StoreComponent<P = Props3, S = {}, SS = any> extends PureComponent<P, S, SS > {
  private _store: Store | undefined;
  public setStore(_store: Store): void;
}
