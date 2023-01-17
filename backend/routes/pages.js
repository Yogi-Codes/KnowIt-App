var express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
var articleSchema= require("./../models/article.js")
module.exports=router;
mongoose.connect('mongodb://localhost:27017/blogged',{useNewUrlParser: true,useUnifiedTopology: true})

router.get('/', (req,res)=>{
articleSchema.find({}, function(error, articles) {
    if (error) {
        console.log(error);
    } else {
        res.status(200).send(articles);
    }
});






})
// router.get('/:id',(req,res) =>{

// res.render('./../Views/Home',{article:article})

//  })

router.get('/new',(req,res)=>{

res.render('newArticle')



})



router.post('/',async (req,res)=>{

    const blog = new articleSchema({
            title : req.body.title,
            description: req.body.desc,
            date : req.body.date,
            thumbnail: req.body.thumbnail,
            cover: req.body.cover
    })
    try{
        console.log(blog)
        
        await blog.save(function(e){
            console.log(e);
        })
        console.log("Saved");
    } catch(err){
    console.log(err)
    
    }
    return res.status(200).send({"result": "Blog Added Successfully!"});
    })
    





