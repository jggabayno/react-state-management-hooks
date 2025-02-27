import React, { useState, useEffect, memo } from "react";

export default memo(function Loader() {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoader(true), 2000);

    return () => clearTimeout(timer);
  }, []);

  return loader && <div className="loader" />;
});
