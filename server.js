const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const user_controlling_routes = require('./Routes/userRoutes'); 
const faq_controlling_routes = require('./Routes/faqRoutes')
const connection_DB_estaiblished = require('./DB/dbconfig');

const app = express();
const PORT_ESTAIBLISHED = process.env.PORT_ESTAIBLISHED || 8080;

dotenv.config();

app.use(bodyParser.json());
app.use(cors());

if (!PORT_ESTAIBLISHED) {
    console.log("Can't reach out to port");
} else {
    app.use('/api/v1/', user_controlling_routes);
    app.use('/api/v1/faq', faq_controlling_routes );
    app.listen(PORT_ESTAIBLISHED, async () => {
        await connection_DB_estaiblished();
        console.log(`Server running successfully on port ${PORT_ESTAIBLISHED}`);
    });
}
