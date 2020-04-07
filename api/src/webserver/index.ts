import 'module-alias/register';
import ExpressServer from '../infrastructure/server/express/express';
import appRoutes from './routes';
import Server from './server';

const serverAdapter = new ExpressServer(3333, appRoutes);

const server = new Server(serverAdapter);

server.listen();