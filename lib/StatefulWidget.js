/**
 * Create By: Meng
 * Desc:
 */

import { useState, useEffect } from "react";

export function StatefulWidget(props) {

  const value = props.source.data;

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
  }, [props.source]);
  return props.child(result);
}
