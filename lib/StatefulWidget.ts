/**
 * Create By: Meng
 * Desc:
 */
import React from 'react';
import {StateSource} from './StateSource';

export type ViewData<T> = {
  data: T;
  has: boolean;
}

type Props2<T> = {
  source: StateSource<T>;
  child: (data: ViewData<T>) => React.ReactElement;
}

export type StatefulWidget<T> = (props: Props2<T>) => React.ReactElement;
