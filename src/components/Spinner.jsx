import React from "react";

const Spinner = () => {
  return (
    <div
      className="w-16 h-16 rounded-full animate-spin m-auto"
      style={{
        background:
          "radial-gradient(farthest-side, #6B7280 94%, transparent) top/10px 10px no-repeat, conic-gradient(transparent 30%, #6B7280)",
        WebkitMask:
          "radial-gradient(farthest-side, transparent calc(100% - 10px), black 0)",
      }}
    ></div>
  );
};

export default Spinner;
