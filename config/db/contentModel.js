import { sequelize, Sequelize } from './dataBase'

export const Content = sequelize.define('contents', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },

    type:{
        type: Sequelize.INTEGER
    },
    path: {
        type: Sequelize.STRING
    }
});

