console.log("freeee");
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const connectDB = require('./db/connect');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const dbUser = process.env.MONGODB_USER;
const dbPassword = process.env.MONGODB_PASSWORD;


mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword  }@nodeprojects.01cx1mj.mongodb.net/TaskHive?retryWrites=true&w=majority&appName=NodeProjects`, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to MongoDB database!');
})
.catch((error) => {
    console.error('Connection failed!', error);  // Log the error
});


app.use(cors());
// app.use(cors('http://127.0.0.1:5500'));
    app.use(bodyParser.json());            
    app.use(express.json());





    app.use('/api', require('./routes/contact'));

    app.use(function (err, req, res, next) {
        res.status(422).send({ error: err.message });
    });






          app.listen(PORT, console.log(`server is on on ${PORT}..........`));
// const start = async () => {
//     try {
//       await connectDB(process.env.MONGO_URI) 
//     } catch (error) {
//         console.log(error);
//       }
//   };
  
//   start();
  