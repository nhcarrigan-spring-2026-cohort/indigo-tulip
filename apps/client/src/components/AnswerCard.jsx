import React, {useState} from "react";

export default function AnswerCard ({ answer }){
  const [comments, setComments] = useState(answer.comments || []);
  const [newComment, setNewComment] = useState("");

  const handleAddComment = async () => {
    try{
const currentUser = JSON.parse(localStorage.getItem("user"));
    const res = await fetch(`http://localhost:3000/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({  body: newComment, 
       authorId: currentUser.id, 
       answerId: answer.id })
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
      <p>Answer from: {answer.author.name}</p>
      <p>{answer.body}</p>
      {comments.map(c =>
      <>
         <p key={c.id}>{c.author.name}~ 🗨️
 {c.body}</p>
         </>)}
      <input
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        placeholder="Add a comment..."
      />
      <button onClick={handleAddComment}>Comment</button>
    </div>
  );
};
