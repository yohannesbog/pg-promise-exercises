
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
    songName: '',
    duration: '',
    releaseYear: ''

};

//prompt user to insert value into song table

prompt('Song name: ')
.then(function ArtistResponse(val) {
  result.songName = val;
  return prompt.multiline('Song Duration: ');
}).then(function durationResponse(val) {
    result.duration = val;
    return prompt.multiline('Song Release Year: ');

  }).then(function ArtistResponse(val) {
    result.releaseYear = val;
    console.log('response:', result);
    console.log('Done! :)'); 
  }).then(function(){
    insertSongRecords()
})


// query to insert records into song table of music database

function insertSongRecords() {
    query = "INSERT INTO song (song_name, duration, release_year) VALUES (${songName}, ${duration}, ${releaseYear});";

    db.result(query, result)
    .then((res) => {
    console.log(res)
    }).then(function multilineResponse(val) {
        result.releaseYear = val;
        return prompt.multiline('Do you want to create new Song?')
      })
    .catch((e) => {
        console.log(e)
    })
    pgp.end();
}