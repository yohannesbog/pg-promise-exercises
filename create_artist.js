
const config = {
    host: 'localhost',
    port: 5432,
    database: 'music',
    user: 'postgres',
};
const pgp = require('pg-promise')();
const db = pgp(config);
var prompt = require('prompt-promise');
var result = {
    artistName: ''

};

// Prompt user to insert values
prompt('Artist name: ')
.then(function ArtistResponse(val) {
  result.artistName = val;
//   return prompt.multiline('Album Name: ');
  console.log('Done! :)');

}).then(function(){
    insertArtistRecords()
})

// function to insert recors in to the Artist table, music database

function insertArtistRecords() {
    let query = `INSERT INTO artist (artist_name) VALUES ($1)`;
    db.result(query, result.artistName)
        .then(function(result) {
            console.log(result);
        }).then(function multilineResponse(val) {
            result.releaseYear = val;
            return prompt.multiline('Do you want to create new Artist?')
          })
        .catch((e)=> {
            console.error(e);
        })
    pgp.end();
}
