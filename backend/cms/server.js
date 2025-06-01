
import config from './src/payload.config.js';

import payload from 'payload';
import dotenv from 'dotenv';

dotenv.config();

const start = async () => {
  await payload.init({
    config,
  });

  payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
};
start();
