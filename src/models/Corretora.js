import Sequelize, { Model } from 'sequelize';

export default class Corretora extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Corretora ja existe',
        },
        validate: {
          len: {
            args: [1, 12],
            msg: 'nome needs to have between 1 and 12 char',
          },
        },
      },
      pais: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Email ja existe',
        },
        validate: {
          len: {
            args: [2, 2],
            msg: 'pais needs to have 2 chars',
          },
        },
      },
    }, {
      sequelize,
      tableName: 'corretora',
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Investimento, { foreignKey: 'corretora_id' });
  }
}
