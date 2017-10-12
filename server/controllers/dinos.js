var mongoose = require('mongoose');
var Dino = mongoose.model('Dino');


module.exports =  (function(){
     
    return{
        index: function(req,res){
            Dino.find({}, function(err, dino) {
            if(err) {
            console.log('something went wrong');
            res.redirect('/')
            } else {
            res.render('index',{data:dino})
            }
        }) 
        },

        create: function(req,res){
             var dinoInstance = new Dino({name: req.body.name, height:req.body.height , weight:req.body.weight});
                dinoInstance.save(function(err) {
                if(err) {
                console.log('something went wrong');
                res.redirect('/')
                } else {
                console.log('successfully added a Dino!');
                res.redirect('/');
                }
            })
        },

        new: function(req,res){
            res.render('new');
        },

        show: function(req,res){
             //console.log(req.params.id)
                Dino.find({ _id: req.params.id }, function(err, response) {
                    if (err) { console.log(err); }
                    //console.log(response)
                    res.render('show', { data: response[0] });
                });
        },
        
        edit: function(req,res){
            Dino.find({ _id: req.params.id }, function(err, response) {
                if (err) { console.log(err); }
                //console.log(response)
                res.render('edit', { data: response[0] });
            })
        },

        update: function(req,res){
                //console.log(req.body);
                Dino.update({ _id: req.params.id }, req.body, function(err, result){
                if (err) { console.log(err); }
                res.redirect('/');
            })
        },

        destroy: function(req,res){
                 //console.log(req.params.id)
                Dino.remove({ _id: req.params.id }, function(err, result){
                if (err) { console.log(err); }
                res.redirect('/');
            });
        }





    }


})();