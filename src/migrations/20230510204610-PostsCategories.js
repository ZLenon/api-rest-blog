module.exports = {
/**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').DataTypes} Sequelize
 */
  up: async (queryInterface, Sequelize) => {    
    await queryInterface.createTable('posts_categories', { 
      post_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      category_id:{
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    });    
  },
  down: async (queryInterface, Sequelize) => {   
    await queryInterface.dropTable('posts_categories');     
  }
};
