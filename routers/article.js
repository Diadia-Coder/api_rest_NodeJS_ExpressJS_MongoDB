const express= require('express');
const route= express.Router();
const articleCtrl=require('../controllers/article')

route.get('/', articleCtrl.createArticle);
route.get('/list', articleCtrl.getAllArticle);
//route.post('/', articleCtrl.insertArticle);
route.post('/', (req, res) => {
    if (req.body._id == '')
       articleCtrl.insertArticle(req, res);
    else
       articleCtrl.updateArticle(req, res);
});
route.get('/:id',articleCtrl.getIDArticle);
//route.post('/', articleCtrl.updateArticle);
route.delete('/delete/:id',articleCtrl.deleteArticle);

module.exports=route;