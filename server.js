const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static('api'))

app.listen(port, () => console.log(`Listening on port ${port}`));