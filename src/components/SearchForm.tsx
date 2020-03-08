import React, {useState, useRef} from 'react'
import Search from './Search';


function SearchForm(){
  const [searchKey, setKey] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  function searchOnClick (event: React.FormEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement> ): void {
    event.preventDefault();
    if (null !== inputRef.current) {
      setKey(inputRef.current.value);
    }
  };

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
      {searchKey && <Search term={searchKey}/>}
    </form>
  );
}

export default SearchForm;
