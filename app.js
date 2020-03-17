const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from WAS L2 session");
});
 
module.exports.app = app;
