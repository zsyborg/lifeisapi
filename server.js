const app = require('./api');

const port = 3001;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});