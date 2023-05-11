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
      user_id: {// colocar references depois esse id vem do user
        type: Sequelize.INTEGER
      },
      published: {
        type: Sequelize.DATE
      },
      updated: {
        type: Sequelize.DATE
      },
     });     
  },
  down: async (queryInterface, Sequelize) => {  
    await queryInterface.dropTable('blog_posts');     
  }
};
