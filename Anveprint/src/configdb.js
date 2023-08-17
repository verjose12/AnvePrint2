
const configura ={};

configura.port = process.env.port || 3001;
configura.db_host = process.env.db_host || 'localhost';
configura.db_user = process.env.db_user || 'verjose';
configura.db_password = process.env.db_password || 'root';
configura.db_database = process.env.db_database || 'db_anve2';
configura.db_port = process.env.db_port || '3306';

module.exports = configura;

