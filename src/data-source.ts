import { DataSource } from "typeorm";
import { resolve } from 'path';
import * as dotenv from 'dotenv';

const environment = process.env.STAGE || 'dev';

dotenv.config({
  path: resolve(__dirname,`../.env.stage.${environment}`),
});

export const BrimenRevampDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_BRIMEN_REVAMP_HOST,
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_BRIMEN_REVAMP_USERNAME,
    password: process.env.DB_BRIMEN_REVAMP_PASSWORD,
    database: process.env.DB_BRIMEN_REVAMP_DATABASE,
    synchronize: process.env.DB_BRIMEN_REVAMP_SYNC === 'true',
    logging: true,
    entities: [`${__dirname}/brimen-revamp/entities/*.entity.ts`],
    migrations: [`${__dirname}/brimen-revamp/migrations/*`],
})

export const BrimenPersetujuanDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_BRIMEN_REVAMP_PRESETUJUAN_HOST,
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_BRIMEN_REVAMP_PRESETUJUAN_USERNAME,
    password: process.env.DB_BRIMEN_REVAMP_PRESETUJUAN_PASSWORD,
    database: process.env.DB_BRIMEN_REVAMP_PRESETUJUAN_DATABASE,
    synchronize: process.env.DB_BRIMEN_REVAMP_PRESETUJUAN_SYNC === 'true',
    logging: true,
    entities: [`${__dirname}/brimen-revamp-persetujuan/entities/*.entity.ts`],
    migrations: [`${__dirname}/brimen-revamp-persetujuan/migrations/*`],
})

export const BrimenTransferDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_BRIMEN_REVAMP_TRANSFER_HOST,
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_BRIMEN_REVAMP_TRANSFER_USERNAME,
    password: process.env.DB_BRIMEN_REVAMP_TRANSFER_PASSWORD,
    database: process.env.DB_BRIMEN_REVAMP_TRANSFER_DATABASE,
    synchronize: process.env.DB_BRIMEN_REVAMP_TRANSFER_SYNC === 'true',
    logging: true,
    entities: [`${__dirname}/brimen-revamp-transfer/entities/*.entity.ts`],
    migrations: [`${__dirname}/brimen-revamp-transfer/migrations/*`]
})

export const BrimenLogDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_BRIMEN_REVAMP_LOG_HOST,
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_BRIMEN_REVAMP_LOG_USERNAME,
    password: process.env.DB_BRIMEN_REVAMP_LOG_PASSWORD,
    database: process.env.DB_BRIMEN_REVAMP_LOG_DATABASE,
    synchronize: process.env.DB_BRIMEN_REVAMP_LOG_SYNC === 'true',
    logging: true,
    entities: [`${__dirname}/brimen-revamp-log/entities/*.entity.ts`],
    migrations: [`${__dirname}/brimen-revamp-log/migrations/*`],
})

export const BrimenOPSDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_BRIMEN_REVAMP_OPS_HOST,
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_BRIMEN_REVAMP_OPS_USERNAME,
    password: process.env.DB_BRIMEN_REVAMP_OPS_PASSWORD,
    database: process.env.DB_BRIMEN_REVAMP_OPS_DATABASE,
    synchronize: process.env.DB_BRIMEN_REVAMP_OPS_SYNC === 'true',
    logging: true,
    entities: [`${__dirname}/brimenops/entities/*.entity.ts`],
    migrations: [`${__dirname}/brimenops/migrations/*`],
})