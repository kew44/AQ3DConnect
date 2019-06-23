const database = require('./database');
const Server = require('./index');

database()
  .then(() => {
    Server(process.env.PORT);
    console.log(`Server running @ localhost:${process.env.PORT}`);
  })
  .catch(error => console.log(`Initializing failed! Reason: ${error.message}`));

