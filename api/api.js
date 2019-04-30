const express = require('express');
const bodyParser = require('body-parser');

const v1 = express.Router();

const PeopleService = require('./people-service');
const peopleService = new PeopleService();

const app = express();
module.exports = app;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', v1);

v1.put('/people/:id',  (request, response) => {
	    const id = request.params.id;
	    const people = request.body;
	    let res = peopleService.updatePeople(id, people)
	    
		response.sendStatus(res ? 200 : 404);
	});

v1.get('/people', (request, response) => {
		peopleService.getPeople(null)
	    .then(data => {
	        response.send(data);
	    })
	    .catch(error=>{
           response.sendStatus(400).end(error);
        });
	});