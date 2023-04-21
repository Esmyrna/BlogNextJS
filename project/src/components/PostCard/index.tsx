import React from 'react'
import { Component, P } from './style'
import Link from 'next/link';
import { UUID } from 'crypto';

interface Posts {
  id: UUID;
  title: string;
  content: string;
  author: string;
  published: string;
  coverImage: string;
  tags: string[];
}

interface Props {
  children: React.ReactNode;
  posts: Posts; // Adiciona a propriedade article
  onClick?: (postId: UUID) => void;
  postId: UUID;
}

const PostCard: React.FC<Props> = ({ posts, onClick, postId, children }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(postId);
    }
  };

  return (
    <Link href={`/posts/${posts.id}`}>
      <Component onClick={handleClick}>
        <P>{children}</P>
        <P>{posts.author}</P>
      </Component>
    </Link>
  );
};

export default PostCard;
