module.exports = {
    origin: process.env.ORIGIN || 'http://localhost:8080',
    db: {
        username: process.env.DB_USER || 'wm2018',
        password: process.env.DB_PASSWORD || '123456',
        host: process.env.DB_HOST || 'localhost',
        //port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME || 'wm2018',
        dialect: 'postgres',
    },
    //process.env.DB_URL || 'postgres://wm2018:123456@localhost:5432/wm2018',
    httpPort: process.env.PORT || 8080,
    sessionSecret: process.env.SESSION_SECRET || 'octocat',
};
