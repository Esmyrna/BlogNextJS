import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { Body, Container, Footer } from "@/styles/style";
import { Nav } from "@/styles/style";
import { Div,  DivLeft, Img,  Left, P, Right, TitleH2 } from "./style";
import Comments from "@/components/Comments";
interface Posts {
  id: string;
  title: string;
  content: string;
  author: string;
  published: string;
  coverImage: string;
  tags: string[];
}

const Articles = () => {
  const router = useRouter();
  const { id } = router.query;

  const [posts, setPosts] = useState<Posts | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(`https://news-api.lublot.dev/api/posts/${id}`);
      const data = await response.json();
      setPosts(data);
    };

    if (id) {
      fetchArticle();
    }
  }, [id]);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Nav>
        <P color="#FFF">Home</P>
      </Nav>
      <Body>
        <Div>
          <Left>
            <DivLeft>
              <Img src={posts.coverImage} alt={posts.title}></Img>
              <TitleH2>{posts.title}</TitleH2>
              <P> {posts.content}</P>
            </DivLeft> </Left>
          <Right>
           
          <Comments />
          
          </Right>
        </Div>
      </Body>



    </>
  );
};

export default Articles;
