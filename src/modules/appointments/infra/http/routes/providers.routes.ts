import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import ProvidersController from '../controllers/ProvidersController';
import ProviderMonthAvailabiltyController from '../controllers/ProviderMonthAvailabilityController';
import ProviderDayAvailabiltyController from '../controllers/ProviderDayAvailabilityController';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerMonthAvailabiltyController = new ProviderMonthAvailabiltyController();
const providerDayAvailabiltyController = new ProviderDayAvailabiltyController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);

providersRouter.get(
  '/:provider_id/month-availability',
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required,
    },
  }),
  providerMonthAvailabiltyController.index,
);
providersRouter.get(
  '/:provider_id/day-availability',
  celebrate({
    [Segments.BODY]: {
      provider_id: Joi.string().uuid().required,
    },
  }),
  providerDayAvailabiltyController.index,
);

export default providersRouter;
