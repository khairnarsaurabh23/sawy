// const express = require('express');
// const http = require('http');
// const path = require('path');

// const app = express();

// const port = process.env.PORT || 8080;

// app.use(express.static(__dirname + '/dist/portfolio'));

// app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

// const server = http.createServer(app);

// server.listen(port, () => console.log(`App running on: http://localhost:${port}`));




const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/portfolio'));

app.listen(process.env.PORT || 8080);


//PathLocationStratergy
//app.use(express.static(__dirname + '/dist/github-login'));
app.get('/*', function(req,res) {
	res.sendFile(path.join(__dirname+'/dist/portfolio/index.html'));
	//res.sendFile(path.join(__dirname+'/src/index.html'));
});



console.log("server is running");