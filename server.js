const port=process.env.PORT || 3000;

const express=require('express');
const path = require("path");

const app=express();
app.use(express.static(path.join(__dirname, "static")));
app.set('view engine','ejs');
app.use(express.urlencoded());

//----------------------------------------------- HOME ---------------------------------------------------------//
app.get('/', function(req, res){
    res.render('index');
})
app.post('/', function(req, res){
    const vid_link=req.body.link;
    console.log(vid_link);
    res.redirect('/vid/'+vid_link);
})



//----------------------------------------------- VIDEO-PAGE ---------------------------------------------------------//
app.get('/vid/:vid_link', (req, res) => {
    res.render('vid',{link:req.params.vid_link});
})





app.listen(port,()=>{console.log('server started')});