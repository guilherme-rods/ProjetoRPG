
const path = require('path')
const dir = path.resolve(__dirname, 'rpg.db')
const database = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: dir
    },
    useNullAsDefault: true
});

module.exports = database