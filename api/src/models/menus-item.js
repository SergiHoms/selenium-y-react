const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('MenusItem', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        language: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        menuId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'businesses',
                key: 'id'
            }
        },
        localeSeoId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'businesses',
                key: 'id'
            }
        },
        localeSlugSeoId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'businesses',
                key: 'id'
            }
        },
        parentKey: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        customUrl: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        private: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        order: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        sequelize,
        tableName: 'menus_items',
        timestamps: true,
        paranoid: true,
        indexes: [
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "id" },
                ]
            },
            {
                name: "menuId",
                using: "BTREE",
                fields: [
                    { name: "menuId" },
                ]
            },
            {
                name: "localeSeoId",
                using: "BTREE",
                fields: [
                    { name: "localeSeoId" },
                ]
            },
            {
                name: "localeSlugSeoId",
                using: "BTREE",
                fields: [
                    { name: "localeSlugSeoId" },
                ]
            },
        ]
    });
};
