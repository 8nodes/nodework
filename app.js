const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const UserRoutes = require('./routes/todos');
const port = 3001;


app.use(cors());
app.use(bodyParser.json());
app.use('/todo',UserRoutes);
app.listen(port , () =>{
    console.log(`Server is running on port ${port}`)
})
mongoose.connect('mongodb://localhost:27017/todolist',{
    useNewUrlParser: true,
    useUnifiedTopology: true,  
});
