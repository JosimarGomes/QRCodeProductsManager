const express = require('express');
const compression = require('compression');

const app = express();

app.use(compression());

app.use(express.static(`${__dirname}/build`));

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("react in port ", port)
});