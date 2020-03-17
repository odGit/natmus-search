import React, {useRef, useEffect} from 'react'
import { useCtx } from '../Context';
import { ICONS } from '../enums/icons-svg';
import '../sass/components/Search.scss';
import IconButton from './atoms/IconButton';
import { setQuery } from '../ducks/actions';


function Search(){
  const inputRef = useRef<HTMLInputElement>(null);
  const {state, dispatch} = useCtx();

  useEffect(() => {
    if(inputRef.current !== null && state.queryTerm !== null){
      inputRef.current.value = state.queryTerm
    }
  })

  function searchOnClick (): void {
    if (null !== inputRef.current) {
      const searchKey = inputRef.current.value;
      if (searchKey.length !== 0) {
        dispatch(setQuery(searchKey));
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
          isDisabled={false} 
          icon={ICONS.SEARCH} 
          icon_size={'2em'} 
          classes='search-svg'
        />
      </div>
    </div>
  );
}

export default Search;
