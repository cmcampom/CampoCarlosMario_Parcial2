const express= require('express');
const hbs = require('express-handlebars');

const fs = require('fs');

const app = express();

app.use(express.static('public'));
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

var aCont=0;
var bCont=0;
var cCont=0;

let impri={
    'Página A': aCont,
    'Página B': bCont,
    'Página C': cCont
}



app.get('/', function(req,res){

    res.send(`
    
    <h1>Ingresa /A, /B o /C</h1>
    

    `    
    );

    });

    app.get('/A', function(req,res){

       
        res.render('indexA.handlebars');
        
        fs.writeFileSync('visitas.txt',JSON.stringify(impri), function(err){
            if(err) return console.error(err);
            
        });
        console.log('Nuevo Visitante en A', aCont);
        aCont=aCont+1;
         impri={
            'Página A': aCont,
            'Página B': bCont,
            'Página C': cCont
        }
        });



    app.get('/B', function(req,res){

        res.render('indexB.handlebars');
        
        fs.writeFileSync('visitas.txt',JSON.stringify(impri), function(err){
            if(err) return console.error(err);
            
        });
        console.log('Nuevo Visitante en B', bCont);
        bCont=bCont+1;
         impri={
            'Página A': aCont,
            'Página B': bCont,
            'Página C': cCont
        }
        
            });



    app.get('/C', function(req,res){

        res.render('indexC.handlebars');
        
        fs.writeFileSync('visitas.txt',JSON.stringify(impri), function(err){
            if(err) return console.error(err);
            
        });
        console.log('Nuevo Visitante en C', cCont);
        cCont=cCont+1;
         impri={
            'Página A': aCont,
            'Página B': bCont,
            'Página C': cCont
        }
            
         });

app.listen(5500);
