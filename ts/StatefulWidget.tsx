/**
 * Create By: Meng
 * Desc:
 */
import React, { useState, useEffect } from "react";
import { StateStore } from "./StateStore";

export interface Store<T> {
  data: T;
  has: boolean;
}

interface Props<T> {
  store: StateStore<T>;
  child: (data: Store<T>) => React.ReactElement;
}

export function StatefulWidget(props: Readonly<Props<any>>) {
  const value = props.store.data;
  // 设置默认植
  const [result, setResult] = useState({
    data: value,
    has: value != null,
  });
  useEffect(() => {
    const subscribe: StateStore<any> = props.store.subscribe(
      (data: any) => {
        setResult({
          data,
          has: true,
        });
      },
      (data: any, err: Error) => {
        console.error("StatefulWidget Error ======>", err);
        setResult({
          data: data,
          has: false,
        });
      }
    );
    // 组件销毁调用
    return () => {
      subscribe.unsubscribe();
    };
  }, [props.store]);

  // 捕获页面代码异常
  return props.child(result);
}
