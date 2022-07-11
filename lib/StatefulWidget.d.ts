/**
 * Create By: Meng
 * Desc:
 */
 import React from "react";
 import { StateStore } from "./StateStore";
 
 export type ViewData<T> = {
   data: T;
   has: boolean;
 };
 
 type Props<T> = {
   store: StateStore<T>;
   child: (data: ViewData<T>) => React.ReactElement;
 };
 
 export function StatefulWidget(props: Readonly<Props<any>>): React.ReactElement;
 