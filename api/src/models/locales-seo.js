const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('LocalesSeo', {
        id: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        rel_parent: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        language: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        group: {
            type: DataTypes.DATE,
            allowNull: false
        },
        key: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        subdomain: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        url: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        keywords: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        description: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        redirection: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        menu: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        changefreq: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        priority: {
            type: DataTypes.DECIMAL(10,0),
            allowNull: true
        },
        sitemap: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'locales_seo',
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
        ]
    });
};
