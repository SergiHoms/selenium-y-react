'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('locales_seo', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      rel_parent: {
        allowNull: false,
        type: Sequelize.STRING
      },
      language: {
        allowNull: false,
        type: Sequelize.STRING
      },
      group: {
        allowNull: false,
        type: Sequelize.DATE
      },
      key: {
        allowNull: false,
        type: Sequelize.STRING
      },
      subdomain: {
        allowNull: true,
        type: Sequelize.STRING
      },
      url: {
        allowNull: true,
        type: Sequelize.STRING
      },
      keywords: {
        allowNull: true,
        type: Sequelize.STRING
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING
      },
      redirection: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      menu: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      changefreq: {
        allowNull: true,
        type: Sequelize.STRING
      },
      priority: {
        allowNull: true,
        type: Sequelize.DECIMAL
      },
      sitemap: {
        allowNull: true,
        type: Sequelize.BOOLEAN
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('locales_seo');
  }
};