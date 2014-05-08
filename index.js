var express = require('express');
var tracker = require('pixel-tracker')

tracker
  .use(function (error, result) {
    // do something with result
    // ...
    console.log(result)
  })
  .configure({ disable_cookies : true })

var app = express();
app.all('/pixel', tracker.middleware)

app.listen(3000)


