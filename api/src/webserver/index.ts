if (process.env.NODE_ENV === 'production') {
    require('module-alias/register');
}

// import ExpressServer from 'infrastructure/server/express/express';
import HapiServer from 'infrastructure/server/hapi/hapi';
import appRoutes from './routes';
import Server from './server';

const port = process.env.PORT || 3333;

// const serverAdapter = new ExpressServer(port as number, appRoutes);
const serverAdapter = new HapiServer(port as number, appRoutes)

const server = new Server(serverAdapter);

server.listen();