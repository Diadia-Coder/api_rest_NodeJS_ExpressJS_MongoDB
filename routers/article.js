const express= require('express');
const route= express.Router();
const articleCtrl=require('../controllers/article')

route.get('/', articleCtrl.createArticle);
route.get('/list', articleCtrl.getAllArticle);
route.post('/', articleCtrl.insertArticle);
route.get('/list/:id',articleCtrl.getIDArticle);
route.get('/update/:id', articleCtrl.updateArticle);
route.delete('/:id',articleCtrl.deleteArticle);

module.exports=route;