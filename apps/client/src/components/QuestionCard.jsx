import React,{useState} from "react";

export default function QuestionCard({ question }){
  const [answers, setAnswers] = useState(question.answers || []);
  const [newAnswer, setNewAnswer] = useState("");

  const handleAddAnswer = async () => {
    const res = await fetch(``, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newAnswer })
    });
    const saved = await res.json();
    setAnswers([...answers, saved]);
    setNewAnswer("");
  };

  return (
    <div className="question-card">
      <h2>{question.title}</h2>
      <p>{question.body}</p>

      <h3>Answers</h3>
    {/*  {answers.map(a => (
        <AnswerCard key={a.id} answer={a} />
        ))}*/}

      <textarea
        value={newAnswer}
        onChange={(e) => setNewAnswer(e.target.value)}
        placeholder="Write your answer..."
      />
      <button onClick={handleAddAnswer}>Submit Answer</button>
    </div>
  );
};
