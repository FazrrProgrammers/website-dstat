import { Redis } from "ioredis";

const redis = new Redis(process.env.UPSTASH_REDIS_URL);

export default async function handler(req, res) {
    let totalRequests = await redis.incr("request_count");
    res.status(200).json({ requests: totalRequests });
}
