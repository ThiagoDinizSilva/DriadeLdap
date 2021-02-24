//ssh to access server, later i'll create a function to edit this 
const SSH = require('simple-ssh');

module.exports = new SSH({
    host: '192.168.0.14',
    user: 'nodejs',
    pass: 'nodejs',
    port:'22',
    
}); 