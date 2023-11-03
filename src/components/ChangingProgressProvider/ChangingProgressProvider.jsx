import React, { useState, useEffect } from "react";

function ChangingProgressProvider({ values, interval = 1000, children }) {
  const [valuesIndex, setValuesIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setValuesIndex((valuesIndex) => (valuesIndex + 1) % values.length);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [values, interval]);

  return children(values[valuesIndex]);
}

export default ChangingProgressProvider;
