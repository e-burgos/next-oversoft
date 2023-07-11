import { rest } from 'msw';

export const handlers = [
  // Users Api
  rest.get('/api/Usuario/UsuariosValidos', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json([]));
  }),
];
