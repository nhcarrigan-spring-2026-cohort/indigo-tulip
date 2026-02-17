import React, { useState, useEffect } from "react";
import LoadingSpinner from './LoadingSpinner.jsx'
import './Search.css'

function SearchBar({ questions }) {
  const [searchChar, setSearchChar] = useState("");
  const [internalQuestions, setInternalQuestions] = useState([]);
  const [error,setError]=useState(null)
  const [loading,setLoading]=useState(false)
  
  // Decide which list to use: parent-provided or self-fetched
  const activeQuestions = questions || internalQuestions;

  useEffect(() => {
     if (!questions) {
     // Fetch directly inside useEffect
     const fetchQuestions = async () => {
     setLoading(true)
      try {
     const res = await fetch("");
     if (!res.ok) {

     throw new Error('Failed to fetch questions');
     } 
     const data = await res.json();
      setInternalQuestions(data);
     } catch (err) {
         setError(err.message); 
        } 
        finally{
            setLoading(false)
        }
}; fetchQuestions();

}
},[]);

  const filteredQuestions = activeQuestions.filter(q =>
    q.title.toLowerCase().includes(searchChar.toLowerCase())
  );

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search questions by title..."
        value={searchChar}
        onChange={e => setSearchChar(e.target.value)}
      />
      
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {loading ? ( <LoadingSpinner/>):
      searchChar ?
      (<ul>
          
        {filteredQuestions.map(q => (
          <li key={q.id}>
            <strong>{q.title}</strong>
            <p>{q.body}</p>
          </li>
        ))}
      </ul>) :(<p>Type something..</p>)}
    </div>
  );
}

export default SearchBar;
