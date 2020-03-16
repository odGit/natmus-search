import React, { ReactElement } from 'react';
import Icon from './Icon';

import '../../sass/components/atoms/IconLabel.scss';

type IconLabelProps = {
  classes?: string ;
  icon: string;
  label: string;
}

function IconLabel ({ classes, icon, label}: IconLabelProps): ReactElement {
  return (
    <div className={`icon-label ${classes}`} >
      <Icon icon={icon} size={"1.5em"} color={'none'}/>
      <span>
        {label}
      </span>
    </div>
  );
};

export default IconLabel;
