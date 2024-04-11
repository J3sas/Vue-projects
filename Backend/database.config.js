import { createPool } from 'mysql2';

const pool = createPool({
  host: '127.0.0.1', 
  user: 'Wilton24',
  port: '3306',  
  password: '12345678',
  database: 'world' 
})

export default pool