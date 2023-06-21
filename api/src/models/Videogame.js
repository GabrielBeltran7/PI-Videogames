const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id: {
      type: DataTypes.UUID,// utilizamos el idenfificador unico universal para hacerlo unico y no tener confilctos con la api
      
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4 //Sequelize asume que todo valor es null,  por lo que asignamos defaultValue: DataTypes.UUIDV4 para asignarlo por defecto
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
   rating: {
      type: DataTypes.STRING,
      allowNull: false,
    }

  },{timestamps: false});
};

