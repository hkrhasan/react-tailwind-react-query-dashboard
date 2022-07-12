import React from "react";

const SuspenseLoader = () => {
  return (
    <div className="h-screen w-full fixed top-0 left-0 flex items-center justify-center">
      <h1 className="text-5xl">Loading...</h1>
    </div>
  );
};

export default SuspenseLoader;
