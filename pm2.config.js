module.exports = {
    apps: [{
        name: "myNuxt",
        script: 'npm',
        exec_mode: "cluster",
        instances: 1,
        error_file: "./logs/err.log",
        out_file: "./logs/out.log",
        merge_logs: true,
        log_date_format: "YYYY-MM-DD HH:mm:ss",
        ignore_watch: 'logs',
        args: 'run start'
    }]
}


//"build_prod": "pm2 set NODE_ENV=production && set PORT=3333 && node ./bin/www  --only prod --watch"
// 运行 pm2 start pm2.config.js --env production
//watch: ['./public','./routes','./views'],
//
//当我切换到了test branch.