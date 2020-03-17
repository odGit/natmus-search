import React from 'react';

type IconProps = {
  icon: string;
  size?: string | number;
  color?: string;
}

const iconStyle = {
  display: 'inline-block',
  alignSelf: 'center'
};

function Icon({icon, color='none', size}: IconProps){
  return (
    <svg
      dangerouslySetInnerHTML={{ __html: icon }}
      style={iconStyle}
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill={color}
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      preserveAspectRatio='xMidYMid meet'
    />
  )
}

export default Icon;
