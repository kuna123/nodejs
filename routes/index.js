var moviesJson=require('../movies.json');
//routes
//home
exports.home=function(req,res){
	var movies=moviesJson.movies;
	res.render('home',{
		title:"Star wars Movies",
		movies:movies
	});
};

//movie_single
exports.movie_single=function(req,res){
	var movies=moviesJson.movies;
	
	var episode_number=req.params.episode_number;
	if (episode_number>=1 && episode_number<=6){
		var movie=movies[episode_number-1];
		var title=movie.title;
		var main_characters=movie.main_characters;
	
	res.render('movie_single',{
		movies:movies,
		title:title,
		movie:movie,
		main_characters:main_characters
	});

	}
	else{
		res.render('not_found',{
		
			movie:movies,
			title:"This is not the page you are looking for"
		
		});
	}
	};

//not found
exports.notFound=function(req,res){
	var movies= moviesJson.movies;
	res.render('not_found',{
		movies:movies,
		title: "This is not the page you are looking for"
	});
};