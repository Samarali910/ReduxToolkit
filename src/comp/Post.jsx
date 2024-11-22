import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Post = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('/api/posts')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
        console.log(response.data)
      })
      .catch(error => {
        console.log('Error object:', error);  
        const errorMsg = error
          ? error.message || 'An error occurred'
          : error.message || 'An error occurred';
        setError(errorMsg);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Post;
