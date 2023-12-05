import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`transition-all py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-transparent ${styles} rounded-[10px] hover:text-blue-50 hover:translate-y-1 hover:transition-all`}
    >
      Get Started
    </button>
  );
};

export default Button;
