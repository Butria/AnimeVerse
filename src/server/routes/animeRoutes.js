const express = require('express');
const fetch = require('node-fetch'); 
const { calcularPuntuacionMedia } = require('../utils/animeUtils');

const router = express.Router();

router.get('/search/:query', async (req, res) => {
  const query = req.params.query;
  try {
    const response = await fetch(`https://api.jikan.moe/v4/search/anime?q=${query}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/calcula-puntuacion/:animeId', async (req, res) => {
  const animeId = req.params.animeId;
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
    const anime = await response.json();

    const puntuacionMedia = calcularPuntuacionMedia(anime);

    res.json({ averageScore: puntuacionMedia });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;