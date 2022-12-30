import { rest } from 'msw';

export const handlers = [
  rest.get('/user', async (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        name: 'Lee',
        username: 'truewayy',
        phone: '000-0000-0000',
        website: 'https://github.com/truewayy',
      }),
    );
  }),
];
