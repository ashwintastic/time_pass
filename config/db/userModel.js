import { sequelize, Sequelize } from './dataBase'

export const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    token: {
        type: Sequelize.STRING
    },
    fbID: {
        type: Sequelize.STRING
    },
    userName: {
        type: Sequelize.STRING
    }

});

