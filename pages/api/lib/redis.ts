import Redis from "ioredis";

const redis = new Redis(`redis://${process.env.REDIS_URL}`, {
  lazyConnect: true,
  password: process.env.REDIS_PASSWORD,
});

export default redis;
