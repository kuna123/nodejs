var express=require('express');
var app=express();
var port=3000;
//set view engine
app.set('view engine','ejs');
app.set('views',__dirname +'/views');
var routes=require('./routes');

//set path for static paths
var path=require('path');
app.use(express.static(path.join(__dirname,'public')));
//routes
//home
app.get('/',routes.home);
app.get('/star_wars_episode/:episode_number?',routes.movie_single);
app.get('*',routes.notFound);


app.listen(process.env.PORT || 3000);

