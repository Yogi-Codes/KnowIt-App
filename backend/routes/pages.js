var express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
var articleSchema= require("./../models/article.js")
module.exports=router;
require("dotenv").config()
mongoose.connect(`mongodb+srv://anik9430:${process.env.MongoPass}@cluster0.seemx1k.mongodb.net/?retryWrites=true&w=majority`,{useNewUrlParser: true,useUnifiedTopology: true})

router.get('/', (req,res)=>{
articleSchema.find({}, function(error, articles) {
    if (error) {
        console.log(error);
    } else {
        res.status(200).send(articles);
    }
});






})
router.get('/:id', (req,res)=>{
    articleSchema.findById(req.params.id, function(error, articles) {
        if (error) {
            console.log(error);
        } else {
            
            res.status(200).send(articles);
        }
    });
    
    
    
    
    
    
    })






router.post('/',async (req,res)=>{

    const blog = new articleSchema({
            title : req.body.title,
            description: req.body.description,
            date : req.body.date,
            thumbnail: req.body.thumbnail,
            cover: req.body.cover
    })
    try{
        console.log(blog)
        console.log(req.body.desc)


        
        await blog.save(function(e){
            console.log(e);
        })
        console.log("Saved");
    } catch(err){
    console.log(err)
    
    }
    return res.status(200).send({"result": "Blog Added Successfully!"});
    })
    





