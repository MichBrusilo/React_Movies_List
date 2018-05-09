var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    genre: 'Sf',
    src: "http://www.meloleggo.it/wp-content/uploads/2011/07/Harry-Potter.jpg"
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    genre: 'Cartoon',
    src: "http://celebwallpapers.net/wp-content/uploads/2017/11/the-lion-king-i-just-cant-wait-to-be-king-p-lovely-lion-king-pictures-of-lion-king-pictures-350x150.jpg"
  },
  {
    id: 3,
    title: 'Skyfall',
    desc: 'Film o Jamesie Bondzie',
    genre: 'Action',
    src: "http://littleprettynails.com/data/include/cms/OPI-SKYFALL/skyfall-2012-poster.jpg"
  }
  
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('p', {}, movie.genre),
      React.createElement('img', {src: movie.src})                       
    );
});


var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );
ReactDOM.render(element, document.getElementById('app'));
