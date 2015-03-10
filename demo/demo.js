var metas = require('../index.js');

var i = 0;
setInterval(function() {
  metas.setTitle('Hello ' + i);
  i++;
}, 1000);
