/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
const BlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {     
    id: {      
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: {      
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  },
    {
      tableName: 'blogPost',
      underscored: true, 
      timestamps: false 
    });

  BlogPost.associate = (model) => {
    BlogPost.belongsTo(model.User, {
      foreignKey: 'user_id',
      as: 'users'
    })
    BlogPost.hasMany(model.PostCategory, {
      foreignKey: 'post_id',
      as: 'postCategories'
    })
  }
  // HasOne -> Tem Um
  // belongsTo -> Pertence a
  // hasMany -> Tem muitos
  // BelongsToMany -> Pertence a muitos
  return BlogPost;
};

module.exports = BlogPost;