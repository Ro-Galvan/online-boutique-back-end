const express = require('express');
const routes = require('./routes');
// importing sequelize connection
// pull in config connection file
const sequelize = require('./config/connection');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));  //DONT FORGET TO CHANGE BACK!!

app.use(routes);

// sync sequelize models to the database, then turn on the server

// you need to synch before app listens or you will crash program
sequelize.sync().then(() => {
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
});

