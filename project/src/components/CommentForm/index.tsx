import { SetStateAction, useState } from "react";
import { Form,  Input, Button, Label } from "./style";

interface Comment {
  content: string;
  id: number;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

interface CommentFormProps {
  onSubmit: (comment: Comment) => void;
  name: string;
  email: string;
}

export default function CommentForm({ onSubmit, name, email }: CommentFormProps) {
  const [content, setContent] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const comment: Comment = {
      id: Date.now(),
      name,
      email,
      content,
      message: "",
      timestamp: new Date().toISOString(),
    };

    onSubmit(comment);
    setContent("");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Comentário Anônimo: <br></br>
        <Input type="text" value={content} onChange={(e: { target: { value: SetStateAction<string>; }; }) => setContent(e.target.value)} />
      </Label>
      <Button type="submit">Enviar</Button>
    </Form>
  );
}
