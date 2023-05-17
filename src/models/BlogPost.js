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
    userId: DataTypes.INTEGER,  
    updated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    published: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
  },
    {
      tableName: 'blog_posts',/* define o nome da tabela no banco de dados. Neste caso, a tabela será chamada de blog_post. */
      underscored: true, 
      timestamps: false 
    });

  BlogPost.associate = (model) => {
    BlogPost.belongsTo(model.User, {
      as: 'users',
      foreignKey: 'userId'
    })
  BlogPost.hasMany(model.PostCategory, {
      as: 'postCategories',
      foreignKey: 'postId'
    }) 
  }
  // HasOne -> Tem Um
  // belongsTo -> Pertence a
  // hasMany -> Tem muitos
  // BelongsToMany -> Pertence a muitos
  return BlogPost;
};

module.exports = BlogPost;



      /*  
       references: {
        model: 'Users',
        key: 'id',
      }, 
      field: 'user_id',// define o nome da coluna que contém a chave estrangeira.
      allowNull: false,
      foreignKey: true,/* indica que esta coluna representa uma chave estrangeira na
       tabela e é utilizada para criar o relacionamento entre as tabelas */
