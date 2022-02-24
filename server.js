const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/akasawy/portfolio'));

app.listen(process.env.PORT || 8080);


//PathLocationStratergy
//app.use(express.static(__dirname + '/dist/github-login'));
app.get('/*', function(req,res) {
	res.sendFile(path.join(__dirname+'/dist/github-login/index.html'));
});



console.log("server is running");