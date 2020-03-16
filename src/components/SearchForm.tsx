import React, {useRef, useEffect} from 'react'
import { useCtx } from '../Context';
// import { gotSearchRes, startSearchReq } from '../ducks/actions';
import { ICONS } from '../enums/icons-svg';
import '../sass/components/SearchForm.scss';
import IconButton from './atoms/IconButton';

import {fetchSearchApi} from '../utils/searchItems';

// async function getReq(query: RequestInfo): Promise<any> {
//   const URL = `https://frontend.natmus.dk/api/Search?query=${query}&size=30`;
//   const response = await fetch(URL, {
//     method: 'get',
//     headers: new Headers({'Content-Type': 'application/json'}) /** Use Content-type as your requirement undifined OR application/json**/
//   });


//   const body = await response.json();
//   // Header
//   // Natmus-Page-Count :100,
//   // Natmus-Total-Count: 959	

//   return body;
// }

function SearchForm(){
  const inputRef = useRef<HTMLInputElement>(null);
  const {state, dispatch} = useCtx();
  
  function searchOnClick (): void {
    if (null !== inputRef.current) {
      const searchKey = inputRef.current.value;
      if (searchKey.length !== 0) {
        // dispatch(startSearchReq(true));
        // getReq(searchKey).then(resp => dispatch(gotSearchRes(resp, false)));
        fetchSearchApi(searchKey, state.limit, state.offsetSize, dispatch);
      }
    }
  };

  useEffect(()=>{
    window.addEventListener('keypress', function(evt){
      if(evt.key === 'Enter'){
        searchOnClick();
      }
    });
     // Remove event listeners on cleanup
    return ()=> {
      window.removeEventListener('keypress',function(evt){
        if(evt.key === 'Enter'){
          searchOnClick();
        }
      });
    }
  },[]);

  return (
    <div className="search-form">
      <div className="search-field">
        <input
          className="search-input"
          type="search"
          placeholder="Search NatMus collection ..."
          ref={inputRef}
        />
        <IconButton
          onClickFn={searchOnClick}  
          disabled={false} 
          icon={ICONS.SEARCH} 
          icon_size={'2em'} 
          classes='search-svg'
        />
      </div>
    </div>
  );
}

export default SearchForm;
