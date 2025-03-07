const mongoose = require('mongoose');

//cnx bd
const dbURL= process.env.URL_MONGOOSE ;
const dbname= process.env.dbname;
mongoose.connect(`${dbURL}/${dbname}`)
.then(()=> console.log('Connected succesfully'))
.catch((err)=> console.log('Erreur:',err));

const mongoose = require('mongoose');

