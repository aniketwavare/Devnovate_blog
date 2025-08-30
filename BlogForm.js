import React, { useState } from "react";
import axios from "axios";

export default function BlogForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitBlog = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/blogs", {
      title,
      content,
      author: "John Developer"
    });
    alert("Blog submitted!"); 
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={submitBlog} className="space-y-6">
      <input 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog Title"
        className="w-full border p-2 rounded"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Blog Content"
        className="w-full border p-2 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
