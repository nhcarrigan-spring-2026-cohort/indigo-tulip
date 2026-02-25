import React, {useState,useEffect} from "react";
import QuestionCard from '../components/QuestionCard'
import './QuestionPage.css'
import AskQuestion from "../components/QuestionForm";

export default function QForum(){
  const [showForm,setShowForm]=useState(false)

    const [questions,setQuestions]=useState([]);
    const [highlightId, setHighlightId] = useState(null);

const fetchQuestions = async () => {
  const currentUser = JSON.parse(localStorage.getItem("user"));
   const res = await fetch("http://localhost:3000/questions");
   const data = await res.json();
   data.author=currentUser
    setQuestions(data); };

    useEffect(()=>{ fetchQuestions();},[])

const handleQuestionPosted = (newQ) => {
   // Append new question immediately 
   setQuestions([...questions, newQ]);
   setHighlightId(newQ.id);
    // Scroll to the new question 
    setTimeout(() => { const el = document.getElementById(`question-${newQ.id}`);
 if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); } }, 100); };

 // Remove highlight after a few seconds 
 setTimeout(() => setHighlightId(null), 3000);

     return (
        <>
        <div>
           <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Ask Question" : "Ask a Question"}
      </button>
      {showForm && <AskQuestion onQuestionPosted={handleQuestionPosted} />}
      <h1>Q&A Forum</h1>
      {questions.map(q => (
        <div id={`question-${q.id}`} key={q.id} className={highlightId === q.id ? "highlight" : ""}>
    <QuestionCard question={q} />
  </div>
      ))}
    </div>
        </>
     )
}