const express = require('express')
const expressLayouts = require("express-ejs-layouts");
const app= express()

app.set('view engine','ejs')
app.use(express.static("public"));
const port = 2100;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static Files
app.use(express.static("public"));
app.use(expressLayouts);

// Set Templating Engine
app.set("layout", "./layouts/masterHome");




app.get('/',function(req,res)
{
    res.render('homesection/home',{title:'CLEANCO'})
})

app.get('/services',function(req,res)
{
    res.render('pages/services',{title:'CLEANCO - SERVICES WE OFFER'})
})

app.get('/contact',function(req,res)
{
    res.render('pages/contact',{title:'CLEANCO - CONTACT US'})
})

app.get('/aboutus',function(req,res)
{
    res.render('pages/about',{title:'CLEANCO - ABOUT US '})
})

app.listen(port)

console.log("Project running at port :" +port);
