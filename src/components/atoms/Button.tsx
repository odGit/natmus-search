import React from 'react';

type ButtonProps = {
  classes : string;
  disabled: boolean;
  onClickFn: React.MouseEventHandler<HTMLElement>;
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
}

function Button ({
  children, classes,
  disabled, onClickFn, 
  type="button" }: ButtonProps): React.ReactElement {
  return (
    <button
      className={classes}
      onClick={onClickFn}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
