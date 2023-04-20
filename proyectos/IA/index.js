const natural = require('natural')
const classifier = new natural.BayesClassifier();

classifier.addDocument('Este es un buen dia', 'positivo')
classifier.addDocument('El clima es agradable hoy', 'positivo')
classifier.addDocument('No me gusta esta pelicula', 'negativo')
classifier.addDocument('El trafico fue terrible hoy', 'negativo')
classifier.addDocument('Chale', 'negativo')
classifier.train()

// Prueba 
console.log(classifier.classify('Hoy es un dia maravilloso'));

// Prueba 
console.log(classifier.classify('No soporto la ciudad'));

// Prueba 
console.log(classifier.classify('Chale hoy me fue mal'))

// Prueba 
console.log(classifier.classify('Chale'))