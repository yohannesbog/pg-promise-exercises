const config = {
    host: 'localhost',
    port: 5432,
    database: 'music',
    user: 'postgres',
    // password: ZhyvOedvW_8knyyEzPqIhORWtuxZ_ER
};
const pgp = require('pg-promise')();
const db = pgp(config);
var prompt = require('prompt-promise');
let result = {
    albumId: '',
    songId: '',
    duration: ''
};

//prompt user to insert value into track table
prompt('Album Id: ')
    .then(function albumIdResponse(val) {
        result.albumId = val;
        return prompt.multiline('Song Id: ');
    })
    .then(function songIdResponse(val) {
        result.songId = val;
        return prompt.multiline('Duration: ');
    }).then(function durationResponse(val) {
        result.duration = val;
        console.log('response:', result);
        console.log('Done! :)');
        prompt.done();

    })
    .then(() => {
        insertTrackRecord()
    })

// query to insert records into track table of music database

function insertTrackRecord() {
    query = "INSERT INTO track (album_id, song_id, track_duration) VALUES (${albumId}, ${songId}, ${duration});";
    db.result(query, result)
        .then((result) => {
            console.log(result)

        }).then(function multilineResponse(val) {
            result.releaseYear = val;
            return prompt.multiline('Do you want to create new Track?')
          })
        .catch((error) => {
            console.log(error)
        })
    pgp.end();

}
