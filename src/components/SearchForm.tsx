import React, {useState, useRef, useEffect} from 'react'
import { useCtx } from '../Context';
import { gotSearchRes } from '../ducks/actions';


async function getReq(query: RequestInfo): Promise<any> {
  const URL = `https://frontend.natmus.dk/api/Search?query=${query}&size=10`;
  const response = await fetch(URL, {
    method: 'get',
    headers: new Headers({'Content-Type': 'application/json'}) /** Use Content-type as your requirement undifined OR application/json**/
  });

  console.log('aloha', response);
  const body = await response.json();
  // Header
  // Natmus-Page-Count :100,
  // Natmus-Total-Count: 959	

  return body;
}

function SearchForm(){
  const [searchKey, setKey] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const {state, dispatch} = useCtx();
  
  function searchOnClick (event: React.FormEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement> ): void {
    event.preventDefault();
    if (null !== inputRef.current) {
      setKey(inputRef.current.value);
    }
  };
  
  useEffect(()=> {
    if (searchKey.length !== 0) {
      getReq(searchKey).then(resp => dispatch(gotSearchRes(resp, false)));
    }
  }, [searchKey]);

  return (
    <form>
      <input 
        type="text"
        placeholder="Search by text, id or collection name"
        ref={inputRef}
      />
      <button type="submit" onClick={searchOnClick}>
        Search
      </button>
      <h2>{searchKey}</h2>
    </form>
  );
}

export default SearchForm;
