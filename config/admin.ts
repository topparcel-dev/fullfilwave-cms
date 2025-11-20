export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    sessions: {
      accessTokenLifespan: env.int('ADMIN_SESSIONS_ACCESS_TOKEN_LIFESPAN', 1800), // 30 minutes
      maxRefreshTokenLifespan: env.int('ADMIN_SESSIONS_MAX_REFRESH_TOKEN_LIFESPAN', 2592000), // 30 days
      idleRefreshTokenLifespan: env.int('ADMIN_SESSIONS_IDLE_REFRESH_TOKEN_LIFESPAN', 604800), // 7 days
      maxSessionLifespan: env.int('ADMIN_SESSIONS_MAX_SESSION_LIFESPAN', 604800), // 7 days
      idleSessionLifespan: env.int('ADMIN_SESSIONS_IDLE_SESSION_LIFESPAN', 3600), // 1 hour
    },
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
