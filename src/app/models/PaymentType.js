module.exports = (sequelize, DataTypes) => {
  const TypeDocument = sequelize.define(
    "PaymentType",
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "The name can not be empty"
          },
          len: {
            args: [1, 25],
            msg: "The document name must contain less than 25 characters"
          }
        }
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "The description can not be empty"
          },
          len: {
            args: [1, 100],
            msg: "The description must contain less than 100 characters"
          }
        }
      },
      active: {
        type: DataTypes.BOOLEAN,
        validate: {
          notEmpty: {
            msg: "The value active can not be empty"
          }
        }
      }
    },
    {
      tableName: "payments_types"
    }
  );

  return TypeDocument;
};
