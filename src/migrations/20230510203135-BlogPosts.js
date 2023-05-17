module.exports = {
/**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').DataTypes} Sequelize
 */
  up: async (queryInterface, Sequelize) => { 
    await queryInterface.createTable('blog_posts', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },     
      title: {
        type: Sequelize.STRING
      },
      content: {
        type: Sequelize.STRING
      },
      user_id: {
        references: {/* define a tabela e a coluna referenciadas pela chave estrangeira. Neste caso, a coluna user_id faz 
        referência à coluna id na tabela users. */
          model: 'users',
          key: 'id'
        },
        onDelete: 'CASCADE',/* define a ação a ser realizada quando a linha referenciada pela chave estrangeira é excluída.
         Neste caso, 'CASCADE' significa que a exclusão da linha referenciada resultará na exclusão automática da linha 
         que contém a chave estrangeira. */
        onUpdate: 'CASCADE',/*  define a ação a ser realizada quando a chave primária de uma linha referenciada pela chave
        estrangeira é atualizada. Neste caso, 'CASCADE' significa que as alterações na chave primária serão refletidas
         automaticamente na chave estrangeira. */
        type: Sequelize.INTEGER
      },
      published: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },      
     }, { timestamps: false });     
  },
  down: async (queryInterface, Sequelize) => {  
    await queryInterface.dropTable('blog_posts');     
  }
};
