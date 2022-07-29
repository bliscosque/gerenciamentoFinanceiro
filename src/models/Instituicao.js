import Sequelize, { Model } from 'sequelize';

export default class Instituicao extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'Instituicao ja existe',
        },
        validate: {
          len: {
            args: [1, 50],
            msg: 'nome needs to have between 1 and 50 char',
          },
        },
      },
      isfgc: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    }, {
      sequelize,
      tableName: 'instituicoes',
    });
    return this;
  }

/*   static associate(models) {
    this.hasMany(models.Investimento);
  } */
}
