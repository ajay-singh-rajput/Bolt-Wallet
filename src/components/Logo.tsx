import React from 'react';

interface LogoProps {
  cs?: string; // Optional prop for CSS class
}

const Logo: React.FC<LogoProps> = ({ cs }) => {
  return (
    <img
      src="/bolt-logo.png"
      className={cs || 'w-32'}
      alt="logo"
    />
  );
};

export default Logo;
