import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../models/User';
import Corretora from '../models/Corretora';

const models = [User, Corretora];

const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
