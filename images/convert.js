var gm = require('gm');

gm('/fulls/01.jpg')
.resize(360, 225)
.autoOrient()
.write(writeStream, function (err) {
  if (!err) console.log(' hooray! ');
});