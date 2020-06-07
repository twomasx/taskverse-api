const xpr = require('express');
const api = xpr();
const morgan = require('morgan');
const port = 9000 || process.env.PORT;
const { sync } = require('./config/db.config');

api.use(xpr.json());
api.use(morgan('combined'));
sync();
require('./config/routes.config')(api);

api.listen(port, () => console.log(`:::LISTENING ON PORT ${port}:::`))