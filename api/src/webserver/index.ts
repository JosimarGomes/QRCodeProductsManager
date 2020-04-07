import 'module-alias/register';
import ExpressServer from '../infrastructure/server/express/express';
import appRoutes from './routes';
import Server from './server';

const port = process.env.PORT || 3333;

const serverAdapter = new ExpressServer(port as number, appRoutes);

const server = new Server(serverAdapter);

server.listen();