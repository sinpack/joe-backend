interface PluginsConfig {
  "users-permissions"?: {
    config?: {
      jwtSecret: string;
    };
  };
}

export default ({
  env,
}: {
  env: (key: string, defaultValue?: string) => string;
}) => {
  return {
    "users-permissions": {
      config: {
        jwtSecret: env("JWT_SECRET", "your-default-jwt-secret"),
      },
    },
  } as PluginsConfig;
};
