import dotenv from 'dotenv';

dotenv.config({ path: '.env-db' });
dotenv.config({ path: '.env-user' });

console.log(process.env.NICKNAME, process.env.DB_NAME);