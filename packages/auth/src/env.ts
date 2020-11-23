import { IApplicationConfig } from './@types/IApplicationConfig.interface';
require('dotenv').config();
export const env: IApplicationConfig = {
    NODE_PORT: parseInt(process.env.NODE_PORT),
    DB: {
        HOST: process.env.DB_HOST,
        PORT: parseInt(process.env.DB_PORT) || 3006,
        USERNAME: process.env.DB_USERNAME,
        PASSWORD: process.env.DB_PASSWORD,
        NAME: process.env.DB_NAME,
    }
}
