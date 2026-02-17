import React, {useState} from "react";
import QuestionCard from '../components/QuestionCard'
import './QuestionPage.css'

export default function QForum(){
/*
    const [questions,setQuestions]=useState([]);

    useEffect(() => { fetch("http://localhost:5000/questions")
     .then(res => res.json()) 
     .then(data => setQuestions(data));
     }, []);
*/
const mockQuestions = [ { id: 1, title: 'Test', subject: 'tester', body: 'How to test question forum' },
     { id: 2, title: 'React State', subject: 'Frontend', body: 'How does React manage component state updates?' }, { id: 3, title: 'Git Merge', subject: 'DevOps', body: 'What is the best way to resolve merge conflicts in Git?' }, { id: 4, title: 'Python Functions', subject: 'Backend', body: 'How do you write reusable functions in Python?' }, { id: 5, title: 'CSS Styling', subject: 'UI/UX', body: 'How can I apply dark mode styling with CSS variables?' },
     { id: 6, title: 'Database Indexing', subject: 'Databases', body: 'Why are indexes important in SQL databases and how do they improve query performance?' } 
    ];
     return (
        <>
        <div>
      <h1>Q&A Forum</h1>
      {mockQuestions.map(q => (
        <QuestionCard key={q.id} question={q} />
      ))}
    </div>
        </>
     )
}