module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('investimentos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      data_investimento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      data_vencimento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      corretora_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'corretora',
          key: 'id',
        },
      },
      instituicao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'instituicoes',
          key: 'id',
        },
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('investimentos');
  },
};
