const express = require('express');
const app = express();
const dotenv = require('dotenv');
const routes = require('./routes/contactRoutes');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();
app.use(express.json());  

// Gunakan semua route dari folder routes (prefix: /api)
app.use('/api', routes);

// Middleware untuk menangani error
app.use(errorHandler);

// Jalankan server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
