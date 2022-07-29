import Sequelize, { Model } from 'sequelize';

export default class Investimento extends Model {
  static init(sequelize) {
    super.init({
      dataInvestimento: {
        type: Sequelize.DATEONLY,
        defaultValue: '',
      },
      dataVencimento: {
        type: Sequelize.DATEONLY,
        defaultValue: false,
      },
      valor: Sequelize.FLOAT,
    }, {
      sequelize,
      tableName: 'investimentos',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Corretora);
    this.belongsTo(models.Instituicao);
  }
}
