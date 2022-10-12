import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.main`,
  events: [
    {
      http: {
        // cors: {
        //   origin: '*',
        //   headers: {
        //     'Content-Type': true,
        //     'X-Amz-Date': true,
        //     'X-Api-Key': true,
        //     'X-Amz-Security-Token': true,
        //     'X-Amz-User-Agent': true,
        //     'X-Amz-Trace-Id': true
        //   },
        //   allowCredentials: false,
        // },
        cors: true,
        method: 'get',
        path: 'cart',
        request: {
        },
      },
    },
  ],
};
