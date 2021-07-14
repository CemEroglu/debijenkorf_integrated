import * as LocalApi from './services/localApi'
import SearchBar from './components/SearchBar';
import React, {useState, useEffect} from 'react';

function App() {
  const [people, setPeople] = useState();
  useEffect(() => {
    let promise= LocalApi.getPeople();
    Promise.resolve(promise).then(People=>{
      setPeople(People)})
  }, [])
  return (
    <div>
      <SearchBar lookUpData={people} maxElement={4}></SearchBar>
    </div>
  );
}

export default App;