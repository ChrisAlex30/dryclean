const express = require('express')
const app= express()

app.set('view engine','ejs')
app.use(express.static("public"));
const port = 2100;

app.get('/',function(req,res)
{
    res.render('coming')
})

app.listen(port)

console.log("Project running at port :" +port);
