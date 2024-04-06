import mysql from 'mysql2/promise';
import express from 'express';
import bodyParser from "body-parser"

const app = express();
const port = 8081;
app.listen(port, ()=>{
  `App running on port ${port}`
})

// Database connection settings
const dbConnect = {
  host: 'localhost',
  user: 'Wilton24',
  password: '12345678',
  database: 'world'
};


async function fetchDataFromDatabase() {
  
  const pool = await mysql.createPool(dbConnect);

  try {
    // Execute query to fetch data
    const [rows, fields] = await pool.query('SELECT * countries');

    // Log fetched data
    console.log('Fetched data:', rows);
    console.log('Fields:', fields);

    return rows;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  } finally {
    // Close the connection pool
    await pool.end();
  }
}


