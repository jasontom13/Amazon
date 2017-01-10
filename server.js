var express = require('express');
var path = require('path');


const app = express();
const port = 3000;

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use('/css', express.static('css'));
app.use(express.static('app'));
app.use(express.static('systemjs.config.js'));
app.use(express.static('.'));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'));
  console.log("DirName " + __dirname);
});


app.listen(port, (err) => {
  if(err) {
    return console.log('Something Bad Happened', err)
  }
  console.log('Server is listening on ' + port);
})
