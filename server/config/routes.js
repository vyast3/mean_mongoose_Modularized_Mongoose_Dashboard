var dinos = require('./../controllers/dinos.js')



module.exports = function(app){

    // app.get('/',function(req,res){
    //  dinos.index(req,res);
    // })

    app.get('/',dinos.index);
    app.get('/dinos/new',dinos.new);
    app.post('/dinos',dinos.create);
    app.get('/dinos/:id',dinos.show);
    app.get('/dinos/edit/:id',dinos.edit);
    app.post('/dinos/:id',dinos.update);
    app.post('/dinos/destroy/:id',dinos.destroy);
    


}