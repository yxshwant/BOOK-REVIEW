const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const expressValidation = require('express-validation');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


require('./routes/bookRoutes')(app);
require('./routes/userRoutes')(app);
require('./routes/reviewRoutes')(app);


app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.use((err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    let accumulatedMessage = err.errors.map((current) => {
      return current.messages[0].split('\"')[1]
    }).join(", ");

    res.status(err.status)
    .json({
      error: "Validation error",
      detail: accumulatedMessage,
    });

  } else {

    let status = err.status ? err.status : 500
    res.status(status)
      .json({
        error: err.error,
      });

  }
});


app.set('port', config.port || 5000);

var server = app.listen(app.get('port'), () => {
  var host = server.address().address;
  var port = server.address().port;

  console.log('listening at http://%s:%s', host, port);
});


module.exports = app; // for testing
