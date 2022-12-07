const Article = require('../models/article');

//Affichage du Formulaire d'ajout
exports.createArticle = (req,res)=>{
    //Postman Pour inser des données
    // const arti= new Article(req.body);
    // arti.save()
    // .then((article)=>{
    //     return res.status(200).json(article);
    // })
    // .catch((error)=>{
    //     return res.status(501).json(error);
    // })
    
    res.render("article/addORedit", {
        viewTitle: "Formulaire d'ajout d'un article"
    });
}
//Afficher des Article
exports.getAllArticle=(req,res)=>{
    Article.find()
    .then((article)=>{
        //return res.status(200).json(article);
        return res.render("article/list", { list : article });
    })
    .catch((error)=>{
        return res.status(501).json(error);
    })
    // if (!err) {
    //     res.render("article/list", {
    //         list: docs
    //     });
    // }
    // else {
    //     console.log('Erreur de Supression :' + err);
    // }
}
//Inserer un Article
exports.insertArticle=(req,res)=>{
    const article= new Article();
    article.id=req.params._id;
    article.titre = req.body.titre;
    article.resumer = req.body.resumer;
    article.contenu = req.body.contenu;
    article.auteur = req.body.auteur;
    article.date_creation = req.body.date_creation;
    article.date_mise_jour = req.body.date_mise_jour;
    article.save((err, doc) => {
        if (!err){
            res.redirect('article/list');
        }
        else {
            console.log('Error during record insertion : ' + err);
        }
    });
}
//Misse à jour d'un Article
exports.updateArticle=(req,res)=>{
    const article= new Article();
    article.id=req.params._id;
    article.titre = req.body.titre;
    article.resumer = req.body.resumer;
    article.contenu = req.body.contenu;
    article.auteur = req.body.auteur;
    article.date_creation = req.body.date_creation;
    article.date_mise_jour = req.body.date_mise_jour;
    Article.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true })
    .then((article)=>{
        return res.status(200).json(article);
    })
    .catch((error)=>{
        return res.status(501).json(error);
    })
    // (err, doc) => {
    //     if (!err) {
    //         //res.redirect('article/list'); 
    //         res.status(200).json(Article);
    //     }
    //     else {
    //         if (doc) {
    //             res.render("article/addORedit", {
    //                 viewTitle: 'Modification Article',
    //                 article: req.body
    //             });
    //         }
    //         else
    //             console.log('Erreur de Modification : ' + err);
    //     }
    // });
}
//Rechercher et Mettre à jour
exports.getIDArticle=(req, res) => {
    Article.find({_id:req.params._id})
    .then((Article)=>{
        return res.status(200).json(Article);
    })
    .catch((error)=>{
        return res.status(501).json(error);
    })
        // if (!err) {
        //     res.render("article/addORedit", {
        //         viewTitle: "Modifier un article",
        //         article: doc
        //     });
        // }
}
//Supprrimer un Article
exports.deleteArticle=(req, res) => {
    const id = req.params._id;
    Article.deleteOne({_id:id})
    .then((article)=>{
        return res.status(200).json(article);
    })
    .catch((error)=>{
        return res.status(501).json(error);
    })

}
