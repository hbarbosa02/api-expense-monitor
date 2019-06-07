module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
      deleted_at: {
        allowNull: true,
        type: DataTypes.DATE
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(80)
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING(24),
        unique: true
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(100),
        unique: true
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("users");
  }
};
