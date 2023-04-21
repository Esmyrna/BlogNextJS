import * as C from "../styles/style"
import Button from "@/components/Btn"
import PostCard from "@/components/PostCard"
import { useState, useEffect } from 'react';
import { UUID } from "crypto";
import { Footer } from "../styles/style";
import Link from 'next/link'

interface Item {
  id: UUID;
  title: string;
  content: string;
  author: string;
  published: string;
  coverImage: string;
  tags: string[];
}

export default function Home() {

  
  const [data, setData] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const limit = 4;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://news-api.lublot.dev/api/posts?_limit=${limit}&_page=${page}`);
      const newData = await response.json();
      setData(newData);
    }
    fetchData();
  }, [page]);

  function handlePostClick(id: UUID) {
    console.log(id);
    window.location.href = `/posts/${id}`;
  }

  return (
    <>
      <C.Nav>
        <C.Ul>
       
          <C.Li>Home</C.Li>
        </C.Ul>
       
      </C.Nav>
      <C.Body>
        <C.Title padding="2rem" color="#c9a1c9" fontSize="32px" >Postagens: </C.Title>
        <C.Container >
          {data.map((item) => (
            <PostCard key={item.id} onClick={() => handlePostClick(item.id)} postId={item.id} posts={item}>
              <C.Title fontSize="14px">
                {item.title}
              </C.Title>
              <C.Infos>
                <C.Paragrafo>{item.author}</C.Paragrafo>
                <C.Paragrafo>{item.published}</C.Paragrafo>
              </C.Infos>
            </PostCard>
          ))}
        </C.Container>
        
      </C.Body>
      <Footer>
        <C.Paragrafo fontSize="23px">Blog desenvolvido por Esmyrna Oliveira</C.Paragrafo>
      </Footer>
    </>
  )
}
