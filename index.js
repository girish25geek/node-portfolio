const express = require('express');
const path = require('path');
const portfolioRoutes = require('./routes/portfolio');

const app = express();
const PORT = 3201;

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', portfolioRoutes);

app.listen(PORT, () => {
  console.log(`🌐 Portfolio app live at http://localhost:${PORT}`);
});
