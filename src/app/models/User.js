const bcrypt = require("bcryptjs");

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
      },
      password: DataTypes.STRING(60)
    },
    {
      hooks: {
        beforeSave: async user => {
          if (user.password.length < 8) {
            throw Error("Password size is less then 8");
          }

          if (await User.findOne({ where: { email: user.email } })) {
            throw Error("Email already exists");
          }

          if (user.password) {
            user.password = bcrypt.hashSync(user.password, 8);
          }
        },
        afterCreate: async user => {
          sequelize.models.UserWallet.create({ user_id: user.id });
        }
      }
    },
    {
      tableName: "users"
    }
  );

  User.prototype.checkPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };

  User.prototype.generateToken = function() {
    return {
      token: jwt.sign({ id: this.id }, process.env.JWT_TOKEN)
    };
  };

  User.associate = models => {
    User.hasOne(models.UserWallet, {
      foreignKey: "user_id",
      as: "wallet"
    });
  };

  return User;
};
