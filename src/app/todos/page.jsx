"use client";

import { use } from "react";

const ToDoPage = ({ postsPromise }) => {
  const posts = use(postsPromise);

  console.log("posts in posts component", posts);

  return (
    <ul>
      {posts.map((post) => (
        <li
          key={post.id}
          className="border rounded-lg p-4 mb-4 shadow"
        >
          <h2 className="text-3xl font-bold">{post.id}</h2>
          <h1 className="text-xl font-semibold">{post.title}</h1>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default ToDoPage;