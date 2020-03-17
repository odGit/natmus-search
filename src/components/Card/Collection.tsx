import React, { ReactElement } from 'react';
import Label from '../atoms/Label';
import convertTextToColor from '../../utils/convertTextToColor';

type CollectionProps = {
  collection: string;
  classes: string;
};

function Collection ({collection, classes}: CollectionProps): ReactElement{
return (
  <Label
    label={collection.toLocaleUpperCase()} 
    classes={classes} 
    styles={{backgroundColor: convertTextToColor(collection)}}
  />
  );
};

export default Collection;
