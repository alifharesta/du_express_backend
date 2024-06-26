import express from "express";
import { getAllBlogs, getSpecificBlog, createNewBlog, updateBlog, deleteBlog } from "./../controllers/blog.js";
import { createNewComment, deleteComment, updateComment } from "./../controllers/comment.js";

export const blogRoutes = express.Router();

//! Blog Routes
// view all blog
blogRoutes.get("/", getAllBlogs);

// view specific blog
blogRoutes.get("/:blogId", getSpecificBlog);

// create a new blog post
blogRoutes.post("/create", createNewBlog);

// update blog post
blogRoutes.patch("/:blogId/update", updateBlog);

// delete blog post
blogRoutes.delete("/:blogId/delete", deleteBlog);

//! Comment Routes
// create new comment in a blog post
blogRoutes.post("/:blogId/c/new", createNewComment);

// update comment
blogRoutes.patch("/:blogId/c/:commentId/edit", updateComment);

// delete comment
blogRoutes.delete("/:blogId/c/:commentId/delete", deleteComment);