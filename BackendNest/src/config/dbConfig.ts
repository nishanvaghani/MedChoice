import * as path from "path";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";


export default(): MysqlConnectionOptions => ({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [path.resolve(__dirname, '..') + '/**/*.entity{.ts,.js}'],
    synchronize: Boolean(process.env.DB_SYNCHRONIZE), //This is only for dev mode. In the production it must be false.
})

// export const mysqlConfig: MysqlConnectionOptions = {
//     type: 'mysql',
//     host: 'localhost',
//     port: 3306,
//     username: 'root',
//     password: 'root',
//     database: 'medchoicedemo',
//     entities: [__dirname + '/**/*.entity{.ts,.js}'],
//     synchronize: false, //This is only for dev mode. In the production it must be false.
// }