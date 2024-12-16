import { DataSource } from "typeorm";
import { resolve } from 'path';
import { config } from 'dotenv';

const environment = process.env.STAGE || 'dev';

config({
  path: resolve(__dirname,`../../.env.stage.${environment}`),
});


export default  new DataSource({
    type: 'mysql',
    host: process.env.DB_BRIMEN_REVAMP_TRANSFER_HOST,
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_BRIMEN_REVAMP_TRANSFER_USERNAME,
    password: process.env.DB_BRIMEN_REVAMP_TRANSFER_PASSWORD,
    database: process.env.DB_BRIMEN_REVAMP_TRANSFER_DATABASE,
    synchronize: process.env.DB_BRIMEN_REVAMP_TRANSFER_SYNC === 'true',
    logging: true,
    entities: [`${__dirname}/entities/*.entity.ts`],
    migrations: [`${__dirname}/migrations/*.ts`]
})