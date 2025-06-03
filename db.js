const sql = require('mssql');
const dotenv = require('dotenv');

dotenv.config();

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: false, // Use true if you're on Azure
    trustServerCertificate: true, // Change to true for local dev / self-signed certs
    // Use the following options if you're using SQL Server 2012 or later
    // and want to enable Always Encrypted
    enableArithAbort: true,
  },
};

const connectToDb = async () => {
  try {
    await sql.connect(dbConfig);
    console.log('Connected to MSSQL database');
  } catch (error) {
    console.error('Error connecting to MSSQL database:', error);
  }
};

module.exports = { sql, connectToDb };