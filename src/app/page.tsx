"use client";

import React, { useState, useEffect } from 'react';
import Post from './components/Post';
import PostForm from './components/PostForm';
import { useUser } from './context/UserContext';

interface Post {
  id: number;
  username: string;
  content: string;
}

const Home: React.FC = () => {
  
  const [posts, setPosts] = useState<Post[]>([]);
  const { user } = useUser();
  const usuario = useUser();

  useEffect(() => {
    // Carregando posts do localStorage
    const storedPosts = localStorage.getItem('posts');
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  const addPost = (username: string, content: string) => {
    const newPost = { id: Date.now(), username: user?.username, content };
    const updatedPosts = [newPost, ...posts];
    setPosts(updatedPosts);
    usuario.makePost(content); // Assumindo que makePosts adiciona posts
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
      <div className="max-w-lg mx-auto w-[30vw] h-30">
        <PostForm onAddPost={addPost} />
        <div>
          {posts.map((post) => (
            <Post key={post.id} username={post.username} content={post.content} />
          ))}
        </div>
      </div>
  );
};

export default Home;