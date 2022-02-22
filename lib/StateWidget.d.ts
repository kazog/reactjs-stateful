/**
 * Create By: Meng
 * Desc:
 */
import React from 'react';
import {StateSource} from './StateSource';

export interface ViewData<T> {
  data: T;
  has: boolean;
}

interface Props2<T> {
  source: StateSource<T>;
  child: (data: ViewData<T>) => React.ReactElement;
}

export class StateWidget<T> = (props: Readonly<Props2<T>>) => React.ReactElement;
