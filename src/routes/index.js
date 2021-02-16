
exports.get = function(req,res) {
    res.sendFile('index.html',{ root: './src/public/login/' });
};