const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Stanislav!");
});
 
module.exports.app = app;
