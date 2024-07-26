// Define the type for env
interface Env {
  (key: string): string;
  bool(key: string, defaultValue?: boolean): boolean;
}

import crypto from "crypto";

// Generate a random salt (you should generate this once and store it securely)
const generateSalt = () => crypto.randomBytes(16).toString("base64");

export default ({ env }: { env: Env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env(generateSalt()), // Ensure this is set
  },
  transfer: {
    token: {
      salt: env(generateSalt()), // Ensure this is set
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});
