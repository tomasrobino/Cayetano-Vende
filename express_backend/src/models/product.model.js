module.exports = (sequelize, Sequelize) => {    
    const Product = sequelize.define("product", {
        product_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        category: {
            type: Sequelize.STRING
        },
        condition: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        img_group_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            unique: true
        }
    });

    return Product;
};