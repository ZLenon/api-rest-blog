module.exports = {
/**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').DataTypes} Sequelize
 */
  up: async (queryInterface, Sequelize) => {    
    await queryInterface.createTable('posts_categories', { 
      post_id: {
        references: {
          model: 'blog_posts',
          key: 'id'
        },
        allowNull: false,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER
      },
      category_id:{
        references: {
          model: 'categories',
          key: 'id'
        },
        allowNull: false,
        primaryKey: true,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER
      },
    });    
  },
  down: async (queryInterface, Sequelize) => {   
    await queryInterface.dropTable('posts_categories');     
  }
};
