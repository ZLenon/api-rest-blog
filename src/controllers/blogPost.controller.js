const services = require('../services');

// Requisito 12
const insertBlogPost = async (request, response) => {
  const { title, content, categoryIds } = request.body;
  const userinfo = request.user;

  const post = await services.insertBlogPost(title, content, categoryIds, userinfo);

  if (post.message) {
    return response.status(400).json(post);
  }
  return response.status(201).json(post);
};

module.exports = {
  insertBlogPost,
};
