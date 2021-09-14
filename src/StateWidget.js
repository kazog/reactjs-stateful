/**
 * Create By: Meng
 * Desc:
 */
import { useState, useEffect } from "react";

//  export interface ViewData<T> {
//    data: T;
//    has: boolean;
//  }

//  interface Props<T> {
//    source: StateSource<T>;
//    child: (data: ViewData<T>) => React.ReactElement;
//  }

export function StateWidget(props) {
  const value = props.source.data;
  // 设置默认植
  const [result, setResult] = useState({
    data: value,
    has: value != null,
  });
  useEffect(() => {
    const subscribe = props.source.subscribe(
      (data) => {
        setResult({
          data,
          has: true,
        });
      },
      (data, err) => {
        console.error("StateWidget Error ======>", err);
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
  }, [props.source]);

  // 捕获页面代码异常
  //  let child = null;
  return props.child(result);
}
