module.exports = {
    apps : [{
      name: 'as-global-api',
      script: './server/index.js',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'as-global-ui',
      script: 'serve',
      env: {
        PM2_SERVE_PATH: './web/dist',
        PM2_SERVE_PORT: 8080,
        PM2_SERVE_SPA: 'true',
        PM2_SERVE_HOMEPAGE: '/index.html'
      }
    }],

    deploy : {
        production : {
          user : 'as-global',
          host : 'as-global.kz',
          ref  : 'origin/master',
          repo : 'git@github.com:Giranda22-Git/asGlobal.git',
          path : '/home/asGlobal',
          ssh_options: ['StrictHostKeyChecking=no', 'PasswordAuthentication=no'],
          'post-deploy' : 'cd /home/asGlobal/server && npm install && cd ../ && pm2 startOrRestart ecosystem.config.js --env production',
          env: {
            NODE_ENV: 'production'
          }
        }
    }
}
