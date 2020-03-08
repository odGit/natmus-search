import React, {useState, useEffect} from 'react';


async function getReq(query: RequestInfo): Promise<any> {
  const URL = `https://frontend.natmus.dk/api/Search?query=${query}&size=10`;
  // const URL = `https://api.github.com/search/repositories?q=${query}+language:javascript&sort=stars&order=desc`;
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

type SearchProps = {
  term: string
}

function Search({term}: SearchProps) {
  const [data, setData] = useState([]);
  
  useEffect(()=> {
    getReq(term).then(resp => setData(resp));
  }, [term]);

  const searchResults = Object.keys(data).map((item, i) => {
    console.log('HEST', data);
      return <p key={`item-${i}`}>{item}</p>
    }
  );

  return(
    <>{searchResults}</>
  );
}

export default Search;
