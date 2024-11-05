//kreirati vlastite GET, PUT, DELETE API-je za rad s objektom unutar vlastitog projekta

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.get('/knjige', (request, response) => {
    return response.send('Popis knjiga');
    });

    app.post('/addKnjiga', (request, response) => {
        return response.send('Popis knjiga');
    });

    app.get('/hello', (request, response) => {
        return response.send('Hello world');
});
        
     app.post('/addknjiga', (request, response) => {
        const data=request.body;
        const naslov=data.naslov;
        const autor=data.autor;
        const god_izdanja=data.god_Izdanja;
        const izdavac=data.izdavac;
        
     return response.send("Dodavanje knjiga: "+naslov+" "+autor+" "+god_izdanja+" "+izdavač);
        
});
        
     app.put('/updateknjige', (request, response) => {
     return response.send('Ažuriranje knjiga ');
});
       
     app.put('/deleteknjige', (request, response) => {
     return response.send('Brisanje knjiga ');
});




app.listen(3000), () => {
    console.log("Server running on port 3000");
    };
  

    