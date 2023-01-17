const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const pageRouter = require('./routes/pages')
const app = express();
var articleSchema = require('./models/article');


mongoose.connect('mongodb://localhost:27017/blogged',{


useNewUrlParser: true, useUnifiedTopology:true

}).then(() => {
    console.log('Connected');
}).catch(() => {
    console.log("Not Connected");
})
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.use('/pages',pageRouter)

app.get('/',(req,res) => {

var  blogs = articleSchema.find()

res.render('home',{blogs:blogs})


})







app.listen(3000)