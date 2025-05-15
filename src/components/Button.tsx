'use client';

import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, disabled, ...rest }: ButtonProps) {
  const baseStyles = ' py-1 px-2 text-sm rounded border transition';

  const activeStyles = `
    border-black text-black bg-white 
    hover:bg-[#f37021] hover:text-white 
    hover:outline hover:outline-white hover:outline-2
  `;
  const disabledStyles = 'border-gray-300 text-gray-400 bg-white cursor-not-allowed opacity-60';

  const appliedStyles = disabled ? disabledStyles : activeStyles;

  return (
    <button
      className={`${baseStyles} ${appliedStyles}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
