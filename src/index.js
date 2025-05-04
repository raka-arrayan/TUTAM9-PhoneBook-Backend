const express = require('express');
const app = express();
const cors = require('cors'); 
const dotenv = require('dotenv');
const routes = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

app.use(cors());            
app.use(express.json());  

app.get('/', (req, res) => {
  res.send('Backend is up and running!');
});

app.use('/api', routes);   
app.use(errorHandler);       

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
