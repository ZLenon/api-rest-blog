/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {     
    id: {      
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: DataTypes.STRING   
  },
    {
      tableName: 'categories',
      underscored: true, 
      timestamps: false 
    });

  Category.associate = (model) => {
    Category.hasOne(model.PostCategory, {
      foreignKey: 'category_id',
      as: 'postsCategories'
    })
  } 
  // HasOne -> Tem Um
  // belongsTo -> Pertence a
  // hasMany -> Tem muitos
  // BelongsToMany -> Pertence a muitos
  return Category;
};

module.exports = Category;