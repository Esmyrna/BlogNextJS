import { useState, useEffect } from "react";
import { DivComment } from "./style";
import CommentForm from "../CommentForm";

interface Comment {
  content: string;
  id: number;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export default function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(comment: Comment) {
    setComments(prevComments => [...prevComments, comment]);
  }

  useEffect(() => {
    async function fetchComments() {
      const response = await fetch("/api/comments");
      const data = await response.json();
      setComments(data);
    }

    fetchComments();
  }, []);

  return (
    <>
      {comments.map(comment => (
        <DivComment key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.content}</p>
        </DivComment>
      ))}
      <CommentForm onSubmit={handleSubmit} name={name} email={email} />
</>
  )}