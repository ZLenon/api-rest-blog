/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {     
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  },
    {
      tableName: 'postCategories',
      underscored: true, 
      timestamps: false 
    });

  PostCategory.associate = (model) => {
    model.BlogPost.belongsToMany(model.Category, {
      foreignKey: 'category_id',
      otherKey: 'post_id',
      as: 'categories',
      through: PostCategory,
    })
    model.Category.belongsToMany(model.BlogPost, {
      foreignKey: 'post_id',
      otherKey: 'category_id',
      as: 'blogPost',
      through: PostCategory,
    })
  }
  // HasOne -> Tem Um
  // belongsTo -> Pertence a
  // hasMany -> Tem muitos
  // BelongsToMany -> Pertence a muitos
  return PostCategory;
};

module.exports = PostCategory;
