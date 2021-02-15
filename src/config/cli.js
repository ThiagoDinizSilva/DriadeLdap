const shell = require('../config/server')
var cli = 'echo a'
exports.use= use;

function use(cli){

 shell.exec(cli, {
    out: function(stdout) {
        console.log(stdout)
        },
    err: function(stderr) {
      console.log(stderr);
     },

}).start();
//Wait to see if some error appears
shell.on('error', function(err) {
    console.log('Oops, something went wrong.');
    console.log(err);
});
}