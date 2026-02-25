import React,{useState} from "react";
import AnswerCard from "./AnswerCard";

export default function QuestionCard({ question }){
  const [answers, setAnswers] = useState(question.answers || []);
  const [newAnswer, setNewAnswer] = useState("");

  const handleAddAnswer = async () => {
    try{
const currentUser = JSON.parse(localStorage.getItem("user"));

if(!currentUser){alert("You must be logged in to answer questions"); return}

    const res = await fetch(`http://localhost:3000/answers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ body: newAnswer,
         authorId: currentUser.id, questionId: question.id })
    });

    if (!res.ok) {
       throw new Error("Failed to add answer");
       }

    const saved = await res.json();
    saved.author={ id: currentUser.id, name: currentUser.name };
    setAnswers([...answers, saved]);
    setNewAnswer("");

  } catch(err){
    console.error("Error adding answer:", err);
     alert("Something went wrong while adding your answer. Please try again.");
  }
  };

  return (
    <div className="question-card">
      <p><strong>Asked by:</strong> <i>{question.author?.name || "Anonymous"}</i></p>
      <h2>{question.title}</h2>
      <p>{question.body}</p>

      <h3>Answers</h3>
      {answers.map(a => (
        <AnswerCard key={a.id} answer={a} />
        ))}

      <textarea
        value={newAnswer}
        onChange={(e) => setNewAnswer(e.target.value)}
        placeholder="Write your answer..."
      />
      <button onClick={handleAddAnswer}>Submit Answer</button>
    </div>
  );
};
