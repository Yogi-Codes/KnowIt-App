const cors = require('cors')
const express = require('express')

const pageRouter = require('./routes/pages')
const app = express();




app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.use('/pages',pageRouter)









app.listen(3000)