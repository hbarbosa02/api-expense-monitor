module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "The name can not be empty"
          },
          len: {
            args: [1, 80],
            msg: "The name must contain less than 80 characters"
          }
        }
      },
      username: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "The username can not be empty"
          },
          len: {
            args: [4, 24],
            msg: "Username must be between 4 and 24 characters"
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: {
            msg: "The email field must be a valid email"
          },
          max: {
            args: 100,
            msg: "The email must contain less than 100 characters"
          }
        }
      }
    },
    {
      tableName: "users"
    }
  );

  return User;
};
