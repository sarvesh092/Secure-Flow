import React from "react";

const Input = ({ icon: Icon, ...props }) => {
  return (
    <div className="relative mb-6">
      {Icon && (
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Icon className="size-5 text-cyan-500" />
        </div>
      )}
      <input
        {...props}
        className="w-full pl-10 pr-3 py-2.5 bg-gray-800 bg-opacity-70 rounded-lg border border-gray-700 
          focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 focus:outline-none
          text-white placeholder-gray-400 transition-all duration-200
          hover:border-cyan-400/50"
      />
    </div>
  );
};

export default Input;
