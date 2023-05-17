const { BlogPost, Category, User, PostCategory } = require('../models');

// Requisito 12
const insertBlogPost = async (title, content, categoryIds, userinfo) => {
  const allCategories = await Promise.all(
   categoryIds.map((id) => Category.findOne({ where: id })),
  );  
  if (allCategories.some((idCategories) => idCategories === null)) {
    return { message: 'one or more "categoryIds" not found' };
  }
  const user = await User.findOne({ 
    where: { email: userinfo.email, password: userinfo.password } });
  const userId = user.dataValues.id;
  
  await BlogPost.create({ title, content, userId });

  const post = await BlogPost.findOne({ where: { title, content, userId } });
  
  await Promise.all(
    categoryIds.map((id) => PostCategory.create({ categoryId: id, postId: post.id })),
  );
  
  return post;
};

module.exports = {
  insertBlogPost,
};

/* 
 await Promise.all(
    categoryIds.map((id) => PostCategory.create({ categoryId: id, postId: userId })),
); */