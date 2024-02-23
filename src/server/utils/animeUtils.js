function calculateAverageScore(anime) {
  
    if (!anime || !anime.seasons || anime.seasons.length === 0) {
      return 0; 
    }
  
    const totalScores = anime.seasons.reduce((sum, season) => sum + (season.score || 0), 0);
    const averageScore = totalScores / anime.seasons.length;
  
    return averageScore;
  }
  
  module.exports = { calculateAverageScore };