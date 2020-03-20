import React, { ReactElement } from 'react';
import IconLabel from '../atoms/IconLabel';
import {ICONS} from '../../enums/icons-svg';


type IDsProps = {
  id_label: string;
  ident_label:string;
};

function ItemIDs ({ id_label,ident_label }: IDsProps): ReactElement {
  return (
    <div className="card-item-ids">
      <IconLabel
        icon={ICONS.DATABASE}
        label={id_label.toString()}
        classes={"card-ids id left"}
      />
      <IconLabel
        icon={ICONS.FOLDER}
        label={ident_label}
        classes={"card-ids identification right"}
      /> 
    </div>
  );
};

export default ItemIDs;
