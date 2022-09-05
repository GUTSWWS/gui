const express = require ('express');
const PORT = 3001;

express()
.set('view engine','ejs')

.use('/static',express.static('public'))

.get('/',(req,res)=>{
    res.render('pages/index')
})
.get('/about',(req,res)=>{
    res.render('pages/about')
})

.listen(PORT,()=>console.log('is the magic port' + PORT))


    