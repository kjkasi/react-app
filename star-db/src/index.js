//https://swapi.co/api/people/1123123421/

class SwapiService {

  _apiBase = 'https://swapi.co/api'; 

  async getResourse(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${ url }, received ${ res.status }`); 
    };
  
    return await res.json();
  };

  async getAllPeople () {
    const res = await this.getResourse(`/people/`);
    return res.results;
  };

  getPerson(id) {
    return this.getResourse(`/people/${id}/`);
  };

  async getAllPlanets () {
    const res = await this.getResourse(`/planets/`);
    return res.results;
  };

  getPlanet(id) {
    return this.getResourse(`/planets/${id}/`);
  };

  async getAllStarships () {
    const res = await this.getResourse(`/starships/`);
    return res.results;
  };

  getStarship(id) {
    return this.getResourse(`/starships/${id}/`);
  };
};

const swapi = new SwapiService();

swapi.getAllPeople().then((people) => {
  people.forEach(p => {
    console.log(p.name);
  });
});

swapi.getPerson(3).then((people) => {
  console.log(people.name);
});


swapi.getAllPlanets().then((people) => {
  people.forEach(p => {
    console.log(p.name);
  });
});

swapi.getPlanet(3).then((people) => {
  console.log(people.name);
});

/*
const getResourse = async(url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${ url }, received ${ res.status }`); 
  };

  const body = await res.json();
  return body;
};

getResourse('https://swapi.co/api/people/1123123421/')
  .then((body) => {
    console.log(body);
  }).catch((err) => {
    console.error('Could not fetch', err);
  });
  */