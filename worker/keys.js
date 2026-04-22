module.exports = {
  redisHost: process.env.REDIS_HOST || 'redis',
  redisPort: Number(process.env.REDIS_PORT) || 6379,
};