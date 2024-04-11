import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center text-surface dark:text-white">
      <div
        className="inline-block size-5 animate-spin rounded-full border-[3.5px] border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-gray-600"
        role="status"
      ></div>
    </div>
  );
};

export default Spinner;
