var serve = require('koa-static');
var koa = require('koa');
var app = koa();

// or use absolute paths
app.use(serve(__dirname + '/../res'));

app.listen(80, function(){
  console.log('listening on port 80');
});
