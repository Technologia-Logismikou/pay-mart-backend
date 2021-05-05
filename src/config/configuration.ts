export default () => ({
  ENV: process.env.NODE_ENV,
  DATABASE: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10),
    user: process.env.DATABASE_USER,
    name: process.env.DATABASE_NAME,
  },
  FRONTEND: {
    url: process.env.FRONTEND_URL,
  },
});
