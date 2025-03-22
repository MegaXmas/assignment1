const mysql = require('mysql2/promise');
require('dotenv').config({ path: require('path').resolve(__dirname, './monsterlessonsacademy-472-angular-calendar-tutorial./.env') });

const pool = mysql.createPool({
    host: 'localhost',
    user: 'user001', // This appears to be missing in your case
    password: 'Peepee123!',
    database: 'course_end_project',
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0
  });

  
  testConnection();

async function testConnection() {
   try {
    const connection = await pool.getConnection();
    console.log('Database connection established successfully');
    connection.release();
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1); 
  }
}


module.exports = {
    pool,
    testConnection
}