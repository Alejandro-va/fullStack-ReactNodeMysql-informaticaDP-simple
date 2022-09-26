/**************************************************
 *IMPORTAMOS CONEXION A LA BASE DE DATOS
 *************************************************/
import db from "../database/db.js";

/**************************************************
 *IMPORTAMOS SEQUELIZE
 *************************************************/
import { DataTypes } from "sequelize";

const BlogModel = db.define("blogs", {
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
});

export default BlogModel;
