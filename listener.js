const database = require('./database');
const Server = require('./index');

database()
  .then(() => {
    Server(80);
    console.log(`Server running @ localhost:80`);
  })
  .catch(error => console.log(`Initializing failed! Reason: ${error.message}`));

