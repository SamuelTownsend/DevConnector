/* In summary, this file sets up a basic Express application, connects it to a database, defines routes for various API endpoints, and starts a server to handle incoming requests. The application follows a modular structure, with route handlers and database configuration in separate files. */


/* Calling in Express */
const express = require('express');

/* bring in db */
const connectDB = require('./config/db');

/* App variable with express */
const app = express();

/* Connect Dabatase */
connectDB();

// Init middleware
app.use(express.json({ extended: false }));

/* Single end point, take get request to "/" and then do a req, res callback */
app.get('/', (req, res) => res.send('API Running'));


// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
/* Look for env variable called PORT when deployed it will get port number OR listen locally on 5000. */
const PORT = process.env.PORT || 5000;

/* Listen to app variable on port, added callback message once it connects */
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
