const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(express.static('api/assets'))

app.listen(port, () => console.log(`Listening on port ${port}`));
