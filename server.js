const express = require('express');
const bodyParser = require('body-parser');
const mahasiswaController = require('./controllers/mahasiswacontroller');


const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/mahasiswa', mahasiswaController);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
