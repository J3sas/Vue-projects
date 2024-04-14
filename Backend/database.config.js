import { createPool } from 'mysql2/promise';

const pool = createPool({
  host: 'localhost',
  user: 'Wilton24',
  port: '3306',
  password: '12345678',
  database: 'world'
})

export default pool;