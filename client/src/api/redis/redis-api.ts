import { Redis } from '@upstash/redis'

const UPSTASH_REDIS_URL = import.meta.env.UPSTASH_REDIS_URL
const UPSTASH_REDIS_TOKEN = import.meta.env.UPSTASH_REDIS_TOKEN

const redis = new Redis({url: UPSTASH_REDIS_URL, token: UPSTASH_REDIS_TOKEN});

export default redis;