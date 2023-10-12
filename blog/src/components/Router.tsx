import React from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import Home from "pages/home";
import PostNew from "pages/posts/new";
import PostEdit from "pages/posts/edit";
import Profile from "pages/profile";
import LoginPage from "pages/login";
import SignupPage from "pages/signup";
import PostPage from "pages/posts/detail";
import Header from "./header";
import Footer from "./footer";
import PostsPage from "pages/posts";

export default function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/posts/new" element={<PostNew />} />
        <Route path="/posts/edit/:id" element={<PostEdit />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}
