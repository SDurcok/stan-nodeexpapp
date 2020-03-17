const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from WAS L2 session2");
});
 
module.exports.app = app;
