const express = require('express');
const routes = require('./routes');
// import sequelize connection
// pull in config connection file

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));  //DONT FORGET TO CHANGE BACK!!

app.use(routes);

// sync sequelize models to the database, then turn on the server

// you need to synch before app listens or you will crash program

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
