import Sequelize from 'sequelize';
import databaseConfig from '../config/database';

import User from '../models/User';
import Corretora from '../models/Corretora';
import Instituicao from '../models/Instituicao';

const models = [User, Corretora, Instituicao];

const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
