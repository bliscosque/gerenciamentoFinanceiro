module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('investimentos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      dataInvestimento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      dataVencimento: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
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
