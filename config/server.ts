// Define the Env type
interface Env {
  (key: string, defaultValue?: string): string;
  int(key: string, defaultValue?: number): number;
  bool(key: string, defaultValue?: boolean): boolean;
  array(key: string, defaultValue?: string[]): string[];
}

// Update the function signature
export default ({ env }: { env: Env }) => {
  // Fetch app keys from environment variables or set default values if not provided
  const appKeys = env.array("APP_KEYS", [
    "defaultKey1",
    "defaultKey2",
    "defaultKey3",
  ]);

  // Ensure appKeys is not empty
  if (appKeys.length === 0) {
    throw new Error(
      "APP_KEYS environment variable must contain at least one key."
    );
  }

  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    app: {
      keys: appKeys,
    },
    webhooks: {
      populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
    },
  };
};
