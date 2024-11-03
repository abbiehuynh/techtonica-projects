// import dotenv from 'dotenv';

// // // corrects error for "require is undefined"
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

// // // configures database connection
// const { Pool } = require('pg');

// const pool = new Pool({
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME,
// });

// module.exports = {
//     query: (text, params) => pool.query(text, params)
// };
