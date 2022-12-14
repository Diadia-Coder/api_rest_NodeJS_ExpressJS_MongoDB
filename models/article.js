const mongoose= require('mongoose');

const articleModel=mongoose.Schema({

    titre:{
        type: String,
        required: true
    },
    resumer:{
        type: String,
        required: true
    },
    contenu:{
        type: String,
        required: true
    },
    auteur:{
        type: String,
        required: true
    },

    date_creation:{
        type: String,
        default: new Date()
    },
    date_mise_jour:{
        type: String,
        required: true
    }
});
module.exports=mongoose.model('article', articleModel);