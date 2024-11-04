import { Hono } from 'hono';

const app = new Hono();

const routes = app.get('/api', (c) => {
  return c.json({ message: 'Hello World' });
});

export type AppType = typeof routes;

export default app;
