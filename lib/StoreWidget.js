/**
 * Author: Meng
 * Create Date: 2022-01-09
 * Desc:
 */

import { useState, useEffect } from "react";

export function StoreWidget(props={state: {}, child: null}) {

  const value = props.state.data;

  const [result, setResult] = useState({
    data: value,
    has: value != null,
  });
  useEffect(() => {
    const subscribe = props.state.subscribe(
      (data) => {
        setResult({
          data,
          has: true,
        });
      },
      (data, err) => {
        console.error("StoreWidget Error ======>", err);
        setResult({
          data: data,
          has: false,
        });
      }
    );
    return () => {
      subscribe.unsubscribe();
    };
  }, [props.state]);
  return props.child(result);
}
