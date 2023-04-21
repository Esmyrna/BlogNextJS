import { NextApiRequest, NextApiResponse } from 'next';

interface Comment {
  
  name: string;
  email: string;
  content: string;

}

const comments: Comment[] = [
  {
    name: 'João',
    email: 'joao@mail.com',
    content: 'Gostei muito do seu artigo!',

    
  },
  {
   
    name: 'Maria',
    email: 'maria@mail.com',
    content: 'Parabéns pelo conteúdo!',
  
  },
  {
   
    name: 'Luiza',
    email: 'luiza@mail.com',
    content: 'Adorei!',
  
  },
  {
   
    name: 'Roberto',
    email: 'luiza@mail.com',
    content: 'Muito bom, poste mais!',
  
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(comments);
  } else if (req.method === 'POST') {
    const newComment: Comment = {
     
      name: req.body.name,
      email: req.body.email,
      content: req.body.content,
      
    };
    comments.push(newComment);
    res.status(201).json(newComment);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
