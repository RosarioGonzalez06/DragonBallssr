import 'zone.js/node';
import express from 'express';
import { join } from 'path';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const distFolder = join(process.cwd(), 'dist/DragonBallssr1/browser');

app.get('/api/characters', async (req, res) => {
  console.log('Backend: Fetching characters from Dragon Ball API...');
  try {
    const response = await fetch('https://dragonball-api.com/api/characters?limit=1000');
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching Dragon Ball characters' });
  }
});

app.use(express.static(distFolder, { index: false }));

app.use((req, res) => {
  res.sendFile(join(distFolder, 'index.html'));
});

const port = 4000;
app.listen(port, () => {
  console.log(`Node Express server listening on http://localhost:${port}`);
});
