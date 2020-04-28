const config = {

    host: 'localhost',
    port: 5432,
    database: 'music',
    user: 'postgres',
    // password: ZhyvOedvW_8knyyEzPqIhORWtuxZ_ER
};

const pgp = require('pg-promise')();
const db = pgp(config);

// select all restaurant

// db.query('SELECT * FROM restaurant')
// .then((results) => {
//     results.forEach((row) => {
//          console.log(row);
//         console.log(`${row.id}, ${row.name}`);

//     })
// })
// .catch((e) => {
//     console.error(e);
// });



// // select only one restaurant
// db.one("SELECT * FROM restaurant WHERE ID = 3")
// .then((row) => {
//     console.log(row.id, row.name, row.distance, row.category);
//     console.log(row)
// })

// .catch((e) => {
//     console.error(e);

// });


// // insert value

// db.result("INSERT INTO restaurant VALUES (9, 'piassa', 117, 4, 'habesha', 'tibs', true)")
// .then((result) => {
//     console.log(result);
// })
// .catch((e) => {
//     console.error(e);

// });

// // sanitize 

// let name = "Big Burger' ; DROP TABLE restaurant; --";
// let query = `INSERT INTO restaurant (id, name) VALUES (12, $1)`;

// db.result(query, name)
// .then((result) => {
//     console.log(result);

// })
// .catch((e) => {
//     console.log(e)
// });



let restaurant = {name: "Donut", stars: 4};
let query2 = `INSERT INTO restaurant (id, name, stars) VALUES (18, ${name}, ${stars})`;

db.result(query2, name, stars)
.then((result) => {
    console.log(result);

})
.catch((e) => {
    console.log(e)
});
pgp.end();