import express from 'express';
import routes from './routes';
import path from 'path';

import 'express-async-errors';
import './database/connections';

const app = express();

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(3333, () => {
  console.log('Server listening on port 3333');
});
