import React from "react";

export function Error() {
  return (
    <div className="grid h-screen place-items-center">
    <div
      className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-16"
      role="alert"
    >
      <p className="font-bold">Error Loading Chart Data</p>
    </div>
    
    </div>
  );
}
