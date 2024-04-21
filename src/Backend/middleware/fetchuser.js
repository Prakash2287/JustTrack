var jwt = require('jsonwebtoken');
const JWT_SECRET = 'Theendisnear';

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    console.log(token);
    if (!token) {
        res.status(401).send({ error: "Please authenticate using a valid token"})
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        console.log(data);
        // the verify method takes the token and the secret key that we have and returns the data that we used in signing or creating the jwt token
        // If the verification fails here or any kind of error occurs here then the data from the catch block gets executed
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token" })
    }

}


module.exports = fetchuser;