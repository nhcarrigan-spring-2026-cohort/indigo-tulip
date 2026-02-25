import React, { useState } from 'react';
import './questionForm.css'

const AskQuestion = ({onQuestionPosted}) => {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');
  const [success,setSuccess]= useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !subject || !body) {
      setError('Please fill in all fields.');
      return;
    }
    // API call

    try{
const currentUser = JSON.parse(localStorage.getItem("user"));

 if (!currentUser) {
  setError("You must be logged in to ask a question.");
  return;
}

        const response=await fetch('http://localhost:3000/questions',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({title, subject, body, authorId: currentUser.id})
        });


        if(!response.ok){
            throw new Error('Failed to submit question')
        }

        const data=await response.json()
console.log({ title, subject, body });
    setSuccess('Your question has been posted!')
    setError('');
    setTitle('');
    setSubject('');
    setBody('');
onQuestionPosted(data);

    } catch (err){
        setError(err.message)
    }

  };

  return (
    <div className="ask-question-container">
      <h2>Ask a Question</h2>
      {error && <p className="error">{error}</p>}
      {success && <p className='success'>{success}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Question Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., How do I solve quadratic equations?"
          />
        </label>

        <label>
          Subject:
          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="">Select a subject</option>
            <option value="Math">Math</option>
            <option value="Physics">Physics</option>
            <option value="History">History</option>
            <option value="Biology">Biology</option>
            <option value="Computer">Computer</option>
          </select>
        </label>

        <label>
          Body:
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Type your question here..."
          />
        </label>

        <button type="submit">Submit Question</button>
      </form>
    </div>
  );
};

export default AskQuestion;
