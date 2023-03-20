//exports configuring parameters for MySQL connection & Sequelize
module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "password",
    DB: "wares",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};