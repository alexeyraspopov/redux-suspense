import React from 'react';

export default function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <a href={post.url} target="_blank">
            {post.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
