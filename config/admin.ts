import crypto from "crypto";

// Define the type for env
interface Env {
  (key: string, defaultValue?: string): string;
  int(key: string, defaultValue?: number): number;
  bool(key: string, defaultValue?: boolean): boolean;
  array(key: string, defaultValue?: string[]): string[];
}

// Generate a random salt (for local development, you might use a fixed value)
const generateSalt = () => crypto.randomBytes(16).toString("base64");

// Define the configuration function
export default ({ env }: { env: Env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", generateSalt()), // Ensure this is set
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", generateSalt()), // Ensure this is set
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT", generateSalt()), // Ensure this is set
    },
  },
  flags: {
    nps: env.bool("FLAG_NPS", true),
    promoteEE: env.bool("FLAG_PROMOTE_EE", true),
  },
});
