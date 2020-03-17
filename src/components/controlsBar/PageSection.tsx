import React, { ReactElement } from 'react';
import { useCtx } from '../../Context';
import IconButton from '../atoms/IconButton';
import Label from '../atoms/Label';
import { ICONS } from '../../enums/icons-svg';
import { changePage } from '../../ducks/actions';

function PageSection (): ReactElement {
  const {state, dispatch} = useCtx()
  const { offsetSize, limit, totalItems, perPage } = state

  const pageLabel = `${1 + offsetSize} - ${Math.min(offsetSize + perPage, totalItems)} of ${totalItems}`

  return (
    <div className='control-section-page'>
      <IconButton
        icon={ICONS.BACK}
        onClickFn={() => dispatch(changePage(-1))}
        isDisabled={offsetSize === 0}
        icon_size={'2em'}
        classes='pagination-icon-button'
      />
      <Label classes='pages-label' label={pageLabel} />
      <IconButton
        icon={ICONS.FORWARD}
        onClickFn={() => dispatch(changePage(1))}
        isDisabled={Math.min(offsetSize + limit, totalItems) === totalItems}
        icon_size={'2em'}
        classes='pagination-icon-button'
      />
    </div>
  )
}

export default PageSection;
