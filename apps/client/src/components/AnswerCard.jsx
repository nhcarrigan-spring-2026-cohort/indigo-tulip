import React, {useState} from "react";

export default function AnswerCard ({ answer }){
  const [comments, setComments] = useState(answer.comments || []);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = async () => {
    try{

    const res = await fetch(``, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newComment })
    });

    if(!res.ok){
        throw new Error('Failed to add comment')
    }

    const saved = await res.json();
    setComments([...comments, saved]);
    setNewComment("");
}catch (err){
    console.error("Error adding comment:", err);
     alert("Something went wrong while adding your comment. Please try again.");
}
  };

  return (
    <div className="answer-card">
      <p>{answer.text}</p>
      {comments.map(c => <p key={c.id}>💬 {c.text}</p>)}
      <input
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment..."
      />
      <button onClick={handleAddComment}>Comment</button>
    </div>
  );
};
