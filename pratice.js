const express = require('express');
const app = express();
app.get('/',function(req,res){
    res.send('Helloworld')
})
app.listen(8080,()=>{
    console.log('App listening on port 8080!');
});