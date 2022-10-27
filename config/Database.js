import {Sequelize} from "sequelize";
 
const db = new Sequelize('crud_db','reactproject','Majiyebo73@',{
    host: 'localhost',
    port: 33062, //Had to use the port because the default value "3306" is already being used by workbench
    dialect: 'mysql'
});
 
export default db;