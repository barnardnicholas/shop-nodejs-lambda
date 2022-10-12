import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { dummyCart } from '../../../dummyData';

import schema from './schema';

const getCart: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  return formatJSONResponse({
    dummyCart,
    event,
  });
};

export const main = middyfy(getCart);
