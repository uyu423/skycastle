module.exports = {
  apps: [
    {
      name: 'SKYCASTLE_API',
      script: 'app.js',
      instances: 0,
      exec_mode: 'cluster',
      env_production: {
        NODE_ENV: 'production',
        RUN_MODE: 'prod',
      },
    },
  ],
};
