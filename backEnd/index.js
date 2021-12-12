const express = require('express');
const app = express();
const PORT = 8080;
const cors = require('cors');
const loignrouter = require('./router/loginRoute');
app.use(express.json());
app.use(cors('*'));
app.use('/', loignrouter);
app.listen(PORT, () => console.log(`app listening at http://localhost:${PORT}`));
