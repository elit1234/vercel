import Redis from "ioredis";

const redis = new Redis(`redis://${process.env.REDIS_URL}`, {
  lazyConnect: true,
});

export default redis;
