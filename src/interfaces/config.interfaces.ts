interface JwtSecrets {
    accessTokenSecret: string
    accessTokenLife: string
    refreshTokenSecret: string
    refreshTokenLife: string
}

interface RedisConnDetails {
    port: number
    host: string
    password?: string
    blacklistKeyName?: string
    blackListEnabled?: string
}

interface OSSConfig {
  SecretId: string
  SecretKey: string
  Bucket: string
  Region: string
  Uin: string
}

export interface Config {
    nodeEnv: string
    port: number
    debugLogging: boolean
    dbsslconn: boolean
    jwt: JwtSecrets
    redis: RedisConnDetails
    databaseDebug: boolean
    databaseUrl: string
    dbEntitiesPath: string[]
    GRAPHQL_PATH: string
    SUBSCRIPTIONS_PATH: string
    UPLOAD_PATH: string

    ossConfig: OSSConfig
}
