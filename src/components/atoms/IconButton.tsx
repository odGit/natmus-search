import React from 'react';
import Button from './Button';
import Icon from './Icon';

import '../../sass/components/atoms/IconButton.scss';

type IconButtonProps = {
  icon: string,
  icon_size: string;
  classes : string;
  isDisabled: boolean;
  onClickFn: (React.MouseEventHandler<HTMLElement> );
  type?: "button" | "submit" | "reset" | undefined;
}

function IconButton ({
  icon, onClickFn,
  icon_size, isDisabled,
  classes, type 
}: IconButtonProps): React.ReactElement {
  return (
    <Button
      onClickFn={onClickFn}
      isDisabled={isDisabled}
      type={type}
      classes={`icon-button ${classes}`}
    >
      <Icon
        icon={icon}
        size={icon_size}
      />

    </Button>
  );
};

export default IconButton;
