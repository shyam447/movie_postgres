const moment = require('moment');
const { isEmpty } = require("lodash");
const { Op } = require("sequelize");

const { Movie } = require('../../model');

const createNewMovie = async (req, res) => {
    
    const { title, year, length, actors } = req.body;

    const movieId = `MV-${moment().unix()}`;
    const movieRecord = {
        movieId,
        title,
        year,
        length,
        actors
    }

    const result = await Movie.create(movieRecord);
    console.log(result.toJSON());

    if (!isEmpty(result)) {
        res.send(result);
    } else {
        res.send({ error: "Movie creations Failed" });
    }
}

const listMovies = async (req, res) => {
    const movies = await Movie.findAll();

    // To convert sequelize model to plain javascript
    const formattedMovie = movies.map(r => r.get({ plain: true }));

    if (!isEmpty(formattedMovie)) {
        res.send(formattedMovie);
    } else {
        res.send({ error: "Movie creations Failed" });
    }
}

const searchMovieTitle = async (req, res) => {
    const { title } = req.params;

    const searchResult = await Movie.findAll({
        where: {
            title: {
                [Op.like]: `%${title}%`,
            }
        },
        raw: true
    });

    console.log(searchResult);

    if (isEmpty(searchResult)) {
        res.send({ message: 'No Records Found' });
    } else if (!isEmpty(searchResult)) {
        res.send(searchResult);
    }
}

module.exports = {
    createNewMovie,
    listMovies,
    searchMovieTitle,
    // updateMovieDetails,
    // deleteMovie
    //https://sequelize.org/master/manual/model-querying-basics.html#simple-update-queries
    // Read about association in RDBMS
}