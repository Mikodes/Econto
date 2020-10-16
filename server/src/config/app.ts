export default {
    MODE: process.env.APP_MODE || 'development',
    PREFIX: process.env.APP_PREFIX || '/api/v1',
    PORT: parseInt(process.env.APP_PORT || '4000')
}