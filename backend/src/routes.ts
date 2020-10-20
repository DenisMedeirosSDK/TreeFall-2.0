import { Router } from 'express';
import treeFallRoutes from './routes/treeFall.routes';

const routes = Router();

routes.use('/treefall', treeFallRoutes);

export default routes;
