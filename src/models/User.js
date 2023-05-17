/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    // definir todas as colunas do banco de dados
    // juntamente com todas as constraints    
    id: {      
      allowNull: false, // indica que a coluna não pode ser nula, ou seja, deve ter um valor
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
    // updatedAt: DataTypes.DATE,
    // createdAt: DataTypes.DATE
  },
    {
      tableName: 'users',/* Esta opção define o nome da tabela que será criada no banco de dados para este modelo */
      underscored: true, /* Esta opção é usada para definir se o Sequelize deve usar o estilo de nomenclatura underscored
       para os nomes de colunas e tabelas. Quando definido como TRUE, isso significa que os nomes de colunas e tabelas serão 
       escritos em minúsculas e separados por underscores. Por exemplo, o nome de coluna "firstName" se tornaria "first_name". */
      timestamps: false /* default é true, Esta opção define se o Sequelize deve adicionar automaticamente as colunas
       "createdAt" e "updatedAt". Quando definido como false, isso significa que essas colunas não serão adicionadas automaticamente. */
    });

  User.associate = (model) => {
    User.hasMany(model.BlogPost, {
      foreignKey: 'userId',
      as: 'blogPost'
    })
  }

  // HasOne -> Tem Um
  // belongsTo -> Pertence a
  // hasMany -> Tem muitos
  // BelongsToMany -> Pertence a muitos

  return User;
};

module.exports = User;