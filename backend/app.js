const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');


const cors = require('cors');
// ...


const app = express();
const multer = require('multer');


const upload = multer({ dest: 'uploads/' });


app.post('/upload', upload.single('fileUpload'), (req, res) => {
  const uploadedFile = req.file;
  // Process the uploaded file as needed
  res.json({ message: 'File uploaded successfully' });
});

// Middleware
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }));

const corsOptions = {
  origin: 'http://localhost:4200',
};

app.use(cors(corsOptions));

// Connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'samar',
  database: 'stage'
});

// Démarrage du serveur
const port = 3000;
app.listen(port, () => {
  console.log(`Serveur backend démarré sur le port ${port}`);
});

// getting data from db to display in my "result" component
app.get('/api/data', (req, res) => {
  const sql = 'SELECT * FROM sorted';

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching data: ' + err.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    res.json(results);
  });
});

// hattan les info ml champs dans ma bd
app.post('/api/insert', (req, res) => {
  
  const formData = req.body;
 
   const score = (parseFloat(formData.m1)*1 + parseFloat(formData.m2)*2 + parseFloat(formData.m3)*3)/5;
   const values = [formData.name, formData.lastname,score,formData.email, formData.option];

  const sql='INSERT INTO result(name,lastname,score,email,options)values(?,?,?,?,?);'
  const drop='DROP TABLE sorted;'
  const add='CREATE TABLE sorted(name varchar(200),lastname varchar(200),score float,email varchar(100),options varchar(200));'
  const sort='INSERT INTO sorted(name,lastname,score,email,options) SELECT * FROM result ORDER BY score ASC ;'

  connection.query(sql, values,drop,add,sort, (err, result) => {
    if (err) {
      console.error('Error inserting data: ' + err.message);
      return res.status(500).send('Internal Server Error');
    }
  
    console.log('Data inserted successfully!');
    return res.status(200).send('Data inserted successfully');
  });


});

//getting les adresses email from the database
app.get('/api/getEmailAddresses', (req, res) => {

  const sql1 = ['SELECT email FROM sorted LIMIT 1;','SELECT email FROM sorted LIMIT 1 OFFSET 1', 'SELECT email FROM sorted LIMIT 20 OFFSET 2'];




  
  connection.query(sql1[2],(err, results) => {
    if (err) {
      console.error('Error fetching email addresses: ' + err.message);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    const email1 = results.map((result) => result.email);
    res.json(email1);

    
  });

 
  
 
  
});




// Route pour vérifier les informations d'identification
app.post('/login', (req, res) => {
  const { id, mdp } = req.body;
  

  // Vérifiez les informations d'identification dans la base de données
  connection.query(
    'SELECT * FROM student WHERE id = ? AND mdp = ?',
    [id, mdp],
    (error, results) => {
      if (error) {
        res.status(500).json({ message: 'Erreur du serveur' });
      } else {
       
        if (results.length > 0) {
          // Informations d'identification correctes
          res.status(200).json({ message: 'Authentification réussite' });
        } else {
          // Informations d'identification incorrectes
          res.status(401).json({ message: 'Identifiant ou mot de passe incorrecte' });
        }
      }
    }
  );
});
