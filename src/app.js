const app = require('./controllers/express');

const index = require('./routes/index');
const login = require('./routes/login');
const register = require('./routes/register');

app.get('/',index.get)
app.post('/register',register.post)
app.post('/login',login.post)



app.listen(3000, function(){
    console.log("server is listening on port: 3000");
});