/**
 * Author: Meng
 * Create Date: 2022-01-09
 * Desc:
 */
import React from "react";
import { StoreState } from "./StoreState";

export type State<T> = {
  data: T;
  has: boolean;
};

type Props<T> = {
  state: StoreState<T>;
  child: (data: State<T>) => React.ReactElement;
};

export function StoreWidget(props: Readonly<Props<any>>): React.ReactElement;
