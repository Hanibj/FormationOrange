const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');

const app = express()
const port = 4000
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello server');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
// connexion à la BD 
const urlCloud = "mongodb+srv://anis:anis1234@clusterprojectmern.zj2km.mongodb.net/notre-societe-cloud?retryWrites=true&w=majority"
const urlLocal = "mongodb://localhost:27017/notre-societe-local?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
mongoose.connect(urlLocal).then(()=> 
        console.log("successful connexion DB"));

// le modèle de données 
const Schema = mongoose.Schema;
let departSchema = new Schema({
    id : Number,
    nom : String,
});

let Depart = mongoose.model("departements", departSchema);

// Affichage 
app.get("/departements", (req, res) => {
    Depart.find({}).then((results, err) => {
        if (!err) {
            res.send(results);
      }
    });
  });
  app.use(express.json())
  // méthode POST - ajout département
app.post("/add", async function (req, res) {
    
    let newDepart = new Depart(req.body);
    try{
        await newDepart.save();
        res.status(200).send({message : `${newDepart.nom} is succussffully added`});
    }
    catch(err){
        res.status(400).send({error : `error adding newDepart ${err}`})
    }
  });

  // méthode put - mise à jour département
  app.put("/update/:id", async function (req, res) {
    try{
        const depart = await Depart.findByIdAndUpdate(req.params.id, req.body);
        await depart.save();
        res.status(200).send({message : `${depart.nom} is succussffully updated`});

    }
    catch(err){
        res.status(400).send({error : `error updating department ${err}`})
    }
  });

  app.delete("/delete/:id", async function (req, res) {
    try{
        const depart = await Depart.findByIdAndDelete(req.params.id);
        res.status(200).send({message : `${depart.nom} is succussffully deleted`});
    }
    catch(err){
        res.status(400).send({error : `error deleting department ${err}`})
    }	
  });


