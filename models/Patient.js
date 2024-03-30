const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Patient extends Model {}

Patient.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    doctor_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "doctor",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "patient",
  }
);

module.exports = Patient;
