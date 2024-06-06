import React, { useState } from 'react';

interface PostFormProps {
  onAddPost: (username: string, content: string) => void;
  
}

const PostForm: React.FC<PostFormProps> = ({ onAddPost }) => {
  const [username, setUsername] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddPost(username, content);
    setUsername('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-color-logo border-transparent p-4 rounded-lg shadow-md my-4">
      <div className="mb-4">
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none outline-none bg-gray-200"
          required
          placeholder='Escreva um post!'
        />
      </div>
      <div className="flex items-center justify-between">
        <button type="submit" className="bg-pink-logo hover:bg-pink-900 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
          Post
        </button>
      </div>
    </form>
  );
};

export default PostForm;
