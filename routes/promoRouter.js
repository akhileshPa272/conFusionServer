const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router({mergeParams: true});
promoRouter.use(bodyParser.json());
promoRouter.route('/')
.all((req,res,next)=>{
	res.statusCode = 200;
	res.setHeader('Content-type', 'text/plain');
	next();
})

.get((req,res,next) =>{
	if(req.params.promoId) res.end('Will send details of the promotions: ' + req.params.promoId + ' to you!');
	else res.end('Will send all the promotions to you!');	
})

.post((req,res,next) =>{
	if(req.params.promoId)
	{
		res.statusCode = 403;
		res.end('POST operation not supported on /promotions/ ' + req.params.promoId );
	}
	else res.end('Will add the promotion: ' + req.body.name + ' with details: ' + req.body.description);

})


.put((req,res,next) =>{
	if(req.params.promoId)
	{
		res.write('Updating the promotion: ' + req.params.promoId + '\n');
	 	res.end('Will update the promotion: ' + req.body.name + ' with details: ' + req.body.description);
	}
	else
	{
		res.statusCode = 403;
		res.end('PUT operation not supported on /promotions');	
	}
})


.delete((req,res,next) =>{
	if(req.params.promoId)
	{
		res.end('Deleting promotion: ' + req.params.promoId);
	}
	else res.end('Deleting all the promotions');
});

module.exports = promoRouter;

