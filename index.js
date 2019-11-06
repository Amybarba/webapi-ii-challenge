// import the server module 
const server = require('./server.js');

// now the server can listen on 7000
server.listen(7000, () => {
console.log ('\n*** Server Running on http://localhost:7000 ***\n');
});
