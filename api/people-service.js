const fs = require('fs');

module.exports = class PeopleService {
    constructor() {
        this.peoples = JSON.parse(fs.readFileSync(__dirname + '/people.json', 'utf8'));
    }

    /*isValid(){
	    return message.author && message.quote;
    }*/

    updatePeople(id, people) {
        const peopleIndex = this.peoples.findIndex( people => people.id == id );
	    if (peopleIndex === -1) return null;
	    this.peoples[peopleIndex] = people;
	    return people;
    }
    
    getPeople(filters) {
        return Promise.resolve(this.peoples);
    }
}
