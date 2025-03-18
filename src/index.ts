import express from 'express';
import cors from 'cors';
import { api } from './routes';
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.use("/api",api);

app.use((req, res) => {
  res.status(404).send('Not found BRUH');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
