import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
const MY_API_KEY = 'ceffe16ccd7d46ce9932d25cc21ec8d8';



export const Movies = () => {
  const [query, setQuery] = useState('');
  const[searchParams, setSearchParams] =  useSearchParams();
  

  const changeFilter = valueFilter => {
    // console.log('valueFilter',  valueFilter);
    setSearchParams(valueFilter!== "" ? {query: valueFilter}: {})
    console.log(searchParams.get("query"));
  }
  useEffect(() => {
    if(query === ''){
      return
    }
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${MY_API_KEY}&query=${query}`)
          .then(response => {
            return response.json();
          })
          .then(data => {
            console.log(data);

          });
         
  }, [query]);
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        // console.log(e.target.elements.text.value);
        changeFilter(e.target.elements.text.value.trim());
        setQuery(e.target.elements.text.value.trim());
       e.target.reset();
      }}>
        <input
         type="text"
          // value={value}
          name="text"></input>
        <button type="submit">find film</button>
      </form>
     <ul>
        {/* тут мэпаем массив отфильтрованных фильмов */}
     </ul>
    </div>
  );
};
