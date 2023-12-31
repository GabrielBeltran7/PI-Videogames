require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
// const videogamesModel = require("./models/Videogame")
// const genresModel = require("./models/Videogame")

const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/videogames`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
// videogamesModel(sequelize)
// genresModel(sequelize)

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
//RELACION DE MUCHOS A MUCHOS Y ELIMINACION EN CASCADA PARA QUE NO QUEDEN  GENEROS SOLOS
const { Videogame, Genres } = sequelize.models;
Videogame.belongsToMany(Genres,{ through:"Videogame_Genres",timestamps: false,  autoIncrement: true },{
  onDelete: "CASCADE",
  onUpdate: "CASCADE"
})
Genres.belongsToMany(Videogame, { through: "Videogame_Genres", timestamps: false,  autoIncrement: true}) // al pasar la cadena through le estamos pidiendo a sequalize que genere un dodelo llamdo 
//Videogame_Genres, con solo dos columnas: userIdy profileId.
// Aca vendrian las relaciones
// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
