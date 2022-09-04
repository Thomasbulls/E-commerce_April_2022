import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
require('dotenv').config();
import routes from "./routes";
import * as cors from "cors";
import * as cookieParser from "cookie-parser"
import verifyJWT from "./middleware/verifyJWT";
import { credentials } from "./middleware/credentials";
import { corsOptions } from "./config/corsOptions";
import refreshToken from "./middleware/refreshToken";
import { createClient } from 'redis';
import productRouter from "./routes/product";
import userRouter from "./routes/user";

const SERVER_PORT = 3500;
export const redisClient = createClient();
redisClient.on('error', (e: any) => {
  console.log('Redis error >', e)
});

createConnection().then(async connection => {

    const app = express();
    
    app.use(credentials);
    app.use(cors(corsOptions));
    app.use(express.urlencoded({ extended: false }));
    
    app.use(express.json());
    app.use(cookieParser());

    // Unprotected Routes
    app.use('/user', userRouter)
    app.use('/product', productRouter);
    app.get('/refresh', refreshToken);

    app.use(verifyJWT); 

    // Protected Routes
    app.use('/', routes)

    
    app.listen(SERVER_PORT);

    console.log(`Express server has started on port ${SERVER_PORT}. Open http://localhost:${SERVER_PORT} to see results`);

}).catch(error => console.log(error));
