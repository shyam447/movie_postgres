// const { Sequelize } = require('sequelize');
const express = require('express');

const apiRoutes = require('./server/apiRoutes');

const app = express();
app.use(express.json());

app.use('/api', apiRoutes());

app.listen(3000, () => {
    console.log('Server is up and and running in port 3000');
})


// const createNewMovie = async () => {
//     const movieId = `MV-${moment().unix()}`;
//     const movieRecord = {
//         movieId,
//         title: 'Tenet',
//         year: 2020,
//         length: '120min',
//         actors: 'Robert'
//     }

//     const result = await Movie.create(movieRecord);

//     console.log(result.toJSON());
// }

// createNewMovie();

// npm i -S sequelize pg pg-hstore



// const connectToDatabase = async () => {
//     // Option 2: Passing parameters separately (other dialects)
//     // const sequelize = new Sequelize('database', 'username', 'password', {

//     const sequelize = new Sequelize('postgres', 'postgres', 'Optech#2020', {
//         host: 'localhost',
//         dialect: 'postgres'
//     });

//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
//}