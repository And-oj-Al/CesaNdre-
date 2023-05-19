import { Pool } from 'pg';

let conn: any;

if (!conn) {
  conn = new Pool({
    user: 'postgres',
    password: 'cJ19995cJ',
    host: 'localhost',
    port: 5432,
    database: 'pagina-perros' 
  });
}

export default conn;
