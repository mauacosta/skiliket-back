import { DataSource } from "typeorm";

import 'reflect-metadata'
import { Usuario } from "./entity/Usuario";
import { Colonia } from "./entity/Colonia";
import { Queja } from "./entity/Queja";
import { Noticia } from "./entity/Noticia";

//import * as dotenv from 'dotenv';

require("dotenv").config();

export const prod = process.env.NODE_ENV === 'production'


export const MysqlDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "root",
    password: "root",
    database: "skiliket",
    synchronize: true,
    logging: false,
    entities: [
        Usuario,
        Colonia,
        Queja,
        Noticia
    ],
    extra: {
        autoLoadEntities: true,
    },

    ...(prod && {

        host: process.env.DB_HOST_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        port: parseInt(process.env.DB_PORT),
        database: process.env.DB_NAME,
        extra: {
            ssl: {
                rejectUnauthorized: false
            }
        },
        //logging: false,
        //synchronize: false,
    })
})




