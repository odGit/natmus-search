import React from 'react';

type ButtonProps = {
  classes : string;
  isDisabled: boolean;
  onClickFn: React.MouseEventHandler<HTMLElement>;
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
}

function Button ({
  children, classes,
  isDisabled, onClickFn, 
  type="button" }: ButtonProps): React.ReactElement {
  return (
    <button
      className={classes}
      onClick={onClickFn}
      disabled={isDisabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
