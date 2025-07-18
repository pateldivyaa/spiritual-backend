const express = require('express');
const router = express.Router();

const { createAuthor, getAuthors } = require('../Controller/AuthorController');
const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog
} = require('../Controller/BlogController');

// Author Routes
router.post('/authors', createAuthor);
router.get('/authors', getAuthors);

// Blog Routes
router.post('/blogs', createBlog);
router.get('/blogs', getBlogs);
router.get('/blogs/:id', getBlogById);
router.put('/blogs/:id', updateBlog);
router.delete('/blogs/:id', deleteBlog);
  
module.exports = router;
