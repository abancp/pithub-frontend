import { env } from "process"

export const SERVER_URL = env.NODE_ENV == "production" ? "https://pithub.onrender.com" : "http://localhost:8000"