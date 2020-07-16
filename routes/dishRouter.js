const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router({mergeParams: true});
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) =>{
	res.statusCode = 200;
	res.setHeader('Content-type', 'text/plain');
	next();

})

// the next function will then continue searching for the same endpoint outside the app.use function
.get((req,res,next) =>{
	if(req.params.dishId) res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
	else res.end('Will send all the dishes to you!');	
})

.post((req,res,next) =>{
	if(req.params.dishId)
	{
		res.statusCode = 403;
		res.end('POST operation not supported on /dishes/ ' + req.params.dishId );
	}
	else res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);

})


.put((req,res,next) =>{
	if(req.params.dishId)
	{
		res.write('Updating the dish: ' + req.params.dishId + '\n');
	 	res.end('Will update the dish: ' + req.body.name + ' with details: ' + req.body.description);
	}
	else
	{
		res.statusCode = 403;
		res.end('PUT operation not supported on /dishes');	
	}
})


.delete((req,res,next) =>{
	if(req.params.dishId)
	{
		res.end('Deleting dish: ' + req.params.dishId);
	}
	else res.end('Deleting all the dishes');
});

module.exports = dishRouter;
