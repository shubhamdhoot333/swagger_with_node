const express = require('express'); 
const Routes = require("./routes/routes.js");
const app = express();
const PORT = 8000;
app.use('/',Routes);

const swaggerUi = require('swagger-ui-express');
 const swaggerDocument = require('./docs/swagger.json');
 app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })


  