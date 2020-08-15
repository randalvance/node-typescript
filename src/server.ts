import express from 'express';
import helloWorld from './helloWorld';

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
    helloWorld();
    res.send('Express + Typescript Server!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});