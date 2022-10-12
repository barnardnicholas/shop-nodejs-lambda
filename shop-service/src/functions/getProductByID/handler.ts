import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { availableProducts } from '../../../dummyData';

import schema from './schema';

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  const {id} = event.pathParameters;
  const product = availableProducts.find((product) => product.id === id) || null;
  return formatJSONResponse({
    product,
    event,
  });
};

export const main = middyfy(hello);
