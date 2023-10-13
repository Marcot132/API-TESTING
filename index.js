const cors = require('cors')
const express = require('express')


const app = express();
app.use(cors());
app.options('*', cors());

const port = 8080;

app.get('/', (req, res, next) => {
	res.send('node express api to myCV <br> by adsoft');
});


app.get('/header', (req, res, next) => {
  res.sendfile("assets/header.json");
});

app.get('/work-experience', (req, res, next) => {
	res.sendfile("assets/workExperience.json");
});

app.get('/skills', (req, res, next) => {
	res.sendfile("assets/skills.json");
});

app.get('/archivements', (req, res, next) => {
	res.sendfile("assets/archivements.json");
});

app.get('/interests', (req, res, next) => {
	res.sendfile("assets/interests.json");
});

app.get('/proxy-size', (req, res, next) => {
	res.sendfile("assets/1a_proxy_size.json");
});

app.get('/dev-size', (req, res, next) => {
	res.sendfile("assets/1a_dev_hours.json");
});

app.listen(port,  () => 
	console.log('listening on port ' + port
));
