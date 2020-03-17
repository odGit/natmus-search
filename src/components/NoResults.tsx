import React, { ReactElement } from 'react';
import '../sass/components/NoResults.scss';
import Icon from './atoms/Icon';
import { ICONS } from '../enums/icons-svg';

type noResultsProps = {
  term: string | null;
};

function NoResults({term}: noResultsProps): ReactElement{
  return (
    <div className="no-results-found">
      <div className="no-results-text">
        <h2>
          <em>
            {`Sorry we could not find any results matching "${term}"`}
          </em>
        </h2>
        <ul className="no-results-tips">
          <li>Check your spelling and try again</li>
          <li>Try a similar but a different search term, like photo instead of image</li>
          <li>Keep your search term simple as our search works best with shorter descriptions</li>
        </ul>
      </div>    
      <div className="wrap">
        <i className="fa-search search-1">
          <Icon icon={ICONS.SEARCH} size={'2em'}/>
        </i>
        <i className="fa-search search-2">
          <Icon icon={ICONS.SEARCH} size={'1.5em'}/>
        </i>
        <i className="fa-search search-3">
          <Icon icon={ICONS.SEARCH} size={'1.5em'}/>
        </i>
        <i className="fa-search search-4">
          <Icon icon={ICONS.SEARCH} size={'2em'}/>
        </i>
        <div className="items">
          <i className="fa"><Icon icon={ICONS.BOOKMARK} size={'1.2em'}/></i>
          <i className="fa"><Icon icon={ICONS.BOX} size={'1.2em'}/></i>
          <i className="fa"><Icon icon={ICONS.DATABASE} size={'1.2em'}/></i>
          <i className="fa"><Icon icon={ICONS.FOLDER} size={'1.2em'}/></i>
          <i className="fa"><Icon icon={ICONS.IMAGE} size={'1.2em'}/></i>
          <i className="fa"><Icon icon={ICONS.SQUARE_CHECK} size={'1.2em'}/></i>
          <i className="fa"><Icon icon={ICONS.BOOKMARK} size={'1.2em'}/></i>
          <i className="fa"><Icon icon={ICONS.SEARCH} size={'1.2em'}/></i>
          <i className="fa"><Icon icon={ICONS.FOLDER} size={'1.2em'}/></i>
          <i className="fa"><Icon icon={ICONS.IMAGE} size={'1.2em'}/></i>
        </div>
      </div>
    </div>
    
  );
};

export default NoResults;
