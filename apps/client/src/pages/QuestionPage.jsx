import React, {useState,useEffect} from "react";
import QuestionCard from '../components/QuestionCard'
import './QuestionPage.css'
import AskQuestion from "../components/QuestionForm";

export default function QForum(){
  const [showForm,setShowForm]=useState(false)

    const [questions,setQuestions]=useState([]);

    useEffect(() => { fetch("http://localhost:3000/questions")
     .then(res => res.json()) 
     .then(data => setQuestions(data));
     }, []);

/*
const mockQuestions = [
  { 
    id: 1, 
    title: 'Test', 
    subject: 'tester', 
    body: 'How to test question forum?',
    answers:[{
      id:1003,
      text:'Use mock questions',
      comments:[{
        id:21,
        text:'How does the backend know which answer owns a comment?'
      }

      ]
    },
    {id:1004,
        text:'Test it manually',
        comments:[{
id:22,
text:'Maybe the backend will fix that hopefully'
        }]
      }
    ] 
  },

  { 
    id: 2, 
    title: 'React State', 
    subject: 'Frontend', 
    body: 'How does React manage component state updates?',
    answers: [
      { 
        id: 1, 
        text: "You can manage React state using the useState hook and pass state down as props.",
        comments: [
          { id: 101, text: "Exactly, useState is the simplest way to start." },
          { id: 102, text: "Don’t forget about useReducer for complex cases." }
        ]
      }
    ]
  },
  { 
    id: 3, 
    title: 'Git Merge', 
    subject: 'DevOps', 
    body: 'What is the best way to resolve merge conflicts in Git?' 
  },
  { 
    id: 4, 
    title: 'Python Functions', 
    subject: 'Backend', 
    body: 'How do you write reusable functions in Python?' 
  },
  { 
    id: 5, 
    title: 'CSS Styling', 
    subject: 'UI/UX', 
    body: 'How can I apply dark mode styling with CSS variables?' 
  },
  { 
    id: 6, 
    title: 'Database Indexing', 
    subject: 'Databases', 
    body: 'Why are indexes important in SQL databases and how do they improve query performance?' 
  }
];
*/
     return (
        <>
        <div>
           <button onClick={() => setShowForm(!showForm)}>
        {showForm ? "Hide Ask Question" : "Ask a Question"}
      </button>
      {showForm && <AskQuestion/>}
      <h1>Q&A Forum</h1>
      {questions.map(q => (
        <QuestionCard key={q.id} question={q} />
      ))}
    </div>
        </>
     )
}