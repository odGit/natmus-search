import React, { ReactElement } from 'react';

type LabelProps = {
  classes?: string | undefined;
  label: string,
  styles?: React.CSSProperties,
}

function Label ({classes, label, styles}: LabelProps): ReactElement {
  return (
    <div className={classes} style={styles}>
      {label}
    </div>
  );
}

export default Label;
