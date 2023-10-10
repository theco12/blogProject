import React from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">PostList</Link>
        </li>
        <li>
          <Link to="/posts/:id">Post Detail</Link>
        </li>
        <li>
          <Link to="/posts/new">Post New Page</Link>
        </li>
        <li>
          <Link to="/posts/edit/:id">Post Edit Page</Link>
        </li>
        <li>
          <Link to="/profile">profile</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/posts" element={<h1>Post List Page</h1>} />
        <Route path="/posts/:id" element={<h1>Post Detail Page</h1>} />
        <Route path="/posts/new" element={<h1>Post New Page</h1>} />
        <Route path="/posts/edit/:id" element={<h1>Post Edit Page</h1>} />
        <Route path="/profile" element={<h1>profile</h1>} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
}

export default App;
