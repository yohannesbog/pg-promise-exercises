const config = {
    host: 'localhost',
    port: 5432,
    database: 'music',
    user: 'postgres',
};
const pgp = require('pg-promise')();
const db = pgp(config);
var prompt = require('prompt-promise');
let result = {
    artistId: '',
    albumName: '',
    releaseYear: ''
};

// prompt user to insert value into the album table
prompt('Album Name: ')
.then(function albumResponse(val) {
  result.albumName = val;
  return prompt.multiline('Album Year: ');
})
.then(function multilineResponse(val) {
  result.releaseYear = val;
  return prompt.multiline('Artist id: ');
})
.then(function multilineResponse(val) {
  result.artistId = val;
  console.log(val, 'response:', result);
  console.log('Done! :)');
  prompt.done();

}).then(() => {
    insertAlbumRecords()
})

// query to insert records into album table of music database
function insertAlbumRecords() {
    let query = "INSERT INTO album (album_name, release_year, artist_id) VALUES (${albumName}, ${releaseYear}, ${artistId});";
    db.result(query, result)
        .then(function(results) {
            console.log(results);
        }).then(function multilineResponse(val) {
            result.releaseYear = val;
            return prompt.multiline('Do you want to create new Album?')
          })
        .catch((e)=> {
            console.error(e);
        })

    pgp.end();
}



