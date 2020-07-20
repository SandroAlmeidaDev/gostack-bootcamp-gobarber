import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
// import * as Sentry from '@sentry/node';
import cors from 'cors';
import 'express-async-errors';

import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

// Sentry.init({
//  dsn:
//    'https://fe53c460874c4625b7694b73a3100290@o349623.ingest.sentry.io/3026376',
// });

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.uploadsFolder));
// app.use(Sentry.Handlers.requestHandler());
app.use(routes);

// app.use(Sentry.Handlers.errorHandler());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('🚀️ Server started on port 3333!');
});
