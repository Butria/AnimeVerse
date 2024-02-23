const express = require('express');
const cors = require('cors');
const animeRoute = require('./routes/animeRoute');

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors()); 
app.use(express.json());


app.use('/api', animeRoute);


app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});