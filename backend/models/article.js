const mongoose = require('mongoose')


const articleSchema = new mongoose.Schema({
title:{

type : String,
    required : true


},
description : {


type : String


},
date :{
type : String

},

thumbnail:{
type:String,

},
cover :{

type:String

}








})
module.exports= mongoose.model('blog', articleSchema)