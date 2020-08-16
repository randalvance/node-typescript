import express from 'express';
import greet from './greet';

const app: express.Application = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    const name = req.query.name ?? 'Stranger';
    const greeting = greet(name);
    res.send(greeting);
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
});