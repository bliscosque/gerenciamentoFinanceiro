import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config();

import './src/database';

import express from 'express';

import homeRoutes from './src/routes/homeRoutes';
import userRoutes from './src/routes/userRoutes';
import tokenRoutes from './src/routes/tokenRoutes';
import corretoraRoutes from './src/routes/corretoraRoutes';
import instituicaoRoutes from './src/routes/instituicaoRoutes';
import investimentoRoutes from './src/routes/investimentoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/corretora/', corretoraRoutes);
    this.app.use('/instituicao/', instituicaoRoutes);
    this.app.use('/investimento/', investimentoRoutes);
  }
}

export default new App().app;
