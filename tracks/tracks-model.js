const db = require('../data/dbConfig');

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipes,
    addRecipe
}

function getDishes() {
    return db('tracks')
}

function getDish(ID) {
    return db('tracks').where({ id }).first()
}

function addDish(dish) {
    return db('tracks').insert(track)
}

function getRecipes() {
    return db('tracks').where({ id }).filter()
}

function addRecipe(reicpe) {
    return db('tracks').instert(track)
}