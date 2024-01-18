import React from 'react';

const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button
      className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
