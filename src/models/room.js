
import Sequelize from "sequelize";
import database from "../database/index.js";


const Room = database.define("room", {
  uuid: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  purpose: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  myName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  partnerName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

export default Room;
