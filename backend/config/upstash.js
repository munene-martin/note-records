import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import dotenv from "dotenv";

// Only call dotenv in a Node environment or else teren teren😂😂
if (typeof window === "undefined" && typeof process !== "undefined") {
  dotenv.config();
}

const rateLimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(40, "60s"),
});

export default rateLimit;
