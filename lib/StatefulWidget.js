/**
 * Create By: Meng
 * Desc:
 */

import { useState, useEffect } from "react";

export function StatefulWidget(props={store: {}, child: null}) {

  const value = props.store.data;

  const [result, setResult] = useState({
    data: value,
    has: value != null,
  });
  useEffect(() => {
    const subscribe = props.store.subscribe(
      (data) => {
        setResult({
          data,
          has: true,
        });
      },
      (data, err) => {
        console.error("StatefulWidget Error ======>", err);
        setResult({
          data: data,
          has: false,
        });
      }
    );
    return () => {
      subscribe.unsubscribe();
    };
  }, [props.store]);
  return props.child(result);
}
