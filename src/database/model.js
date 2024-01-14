const { DataTypes } = require("sequelize");
const sequelize = require("./db");

const UrlStatus = sequelize.define(
  "url",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    urlCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    longUrl: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    shortUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

(async () => {
  await sequelize.sync();
  console.log("Model synchronized with the database.");
})();

module.exports = UrlStatus;