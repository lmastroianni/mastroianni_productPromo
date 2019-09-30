const express = require('express');
const path = require('path'); //path lets us navigate file system

// heroku assigns a port when it deploys via the process (environment variables - coming )
//locally this will run @ port 3000 remotely it'll run whenever heroku tells it to run
const port = process.env.PORT || 3000; //a double pipe means "or"

const app = express();

// a forward slash is the home route (same as index.html)

app.get('/', (req, res) => {
  res.send('Vinyl app is live!');
})

app.get('/contact', (req, res) => {
  res.send('on the contact page');
})

app.listen(port, () => {
  console.log(`Server running at $(port)}`);
});