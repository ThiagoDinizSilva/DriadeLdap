const db = require('../config/data')
exports.get = function(req,res) {
    res.sendFile('index.html',{ root: './src/public/login/' });
};

exports.post = async (req, res) => {
    console.log('Got body:', req.body);
  
};