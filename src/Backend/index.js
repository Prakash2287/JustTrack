const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
const authenticate=require('./Routes/auth');
const login=require('./Routes/notes');
// Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled access to resources located outside of a given domain. It extends and adds flexibility to the same-origin policy (SOP). However, it also provides potential for cross-domain attacks, if a website's CORS policy is poorly configured and implemented. CORS is not a protection against cross-origin attacks such as cross-site request forgery (CSRF).
// Like basically ye hame frontend se kisi 3rd party ko data bhejne me help karta hai

connectToMongo();
const app = express()
// App stores the method express that comes with the express package
const port = 5000

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/api/auth',authenticate)
app.use('/api/notes', login);


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})