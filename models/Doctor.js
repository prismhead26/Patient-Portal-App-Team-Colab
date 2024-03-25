const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Doctor extends Model {}

Doctor.init(
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
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
    clinic: {
      type: DataTypes.STRING,
    },
  },
  {
    hooks: {
      beforeCreate: async (newDoctorData) => {
        newDoctorData.password = await bcrypt.hash(newDoctorData.password, 10);
        return newDoctorData;
      },
      beforeUpdate: async (updatedDoctorData) => {
        updatedDoctorData.password = await bcrypt.hash(updatedDoctorData);
        return updatedDoctorData;
      },
    },
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: "doctor",
  }
);

module.exports = Doctor;
