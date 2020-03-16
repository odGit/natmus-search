import React, { ReactElement } from 'react';

type LabelProps = {
  classes?: string | undefined;
  label: string,
}

function Label ({classes, label}: LabelProps): ReactElement {
  return (
    <div className={classes}>
      {label}
    </div>
  );
}

export default Label;
