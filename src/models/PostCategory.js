/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
const PostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {     
    postId: {
      references: {/* define a tabela e a coluna referenciadas pela chave estrangeira. Neste caso, a coluna BlogPost faz 
      referência à coluna id na tabela BlogPost. */
        model: 'BlogPost',
        key: 'id',
      },
      field: 'post_id',// define o nome da coluna que contém a chave estrangeira.
      primaryKey: true, /* Chave primaria composta, pois na mesma tabela se tem duas primary key */
      foreignKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      references: {
        model: 'Categories',
        key: 'id',
      },
      field: 'category_id',// define o nome da coluna que contém a chave estrangeira.
      primaryKey: true, /* Chave primaria composta, pois na mesma tabela se tem duas primary key */
      foreignKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  },
    {
      tableName: 'postCategories',
      underscored: true, 
      timestamps: false 
    });

  PostCategory.associate = (model) => {
    model.BlogPost.belongsToMany(model.Category, {/* define que a tabela BlogPost possui uma relação muitos-para-muitos com a tabela Category */
      foreignKey: 'category_id',/*  define que a coluna category_id da tabela PostCategory será utilizada como chave estrangeira na tabela BlogPost */
      otherKey: 'post_id',/* define que a coluna post_id da tabela PostCategory será utilizada como chave estrangeira na tabela Category. */
      as: 'categories',/* define o nome do relacionamento, que será utilizado para fazer consultas através do método include */
      through: PostCategory,/* define o nome da tabela que será utilizada como tabela intermediária para representar a relação muitos-para-muitos
       entre as tabelas BlogPost e Category. Essa tabela é criada automaticamente pelo Sequelize quando o método belongsToMany é utilizado. */
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
