
const gulp = require('gulp');
const express = require('express');
const webpack = require('webpack');
const gulpWebpack = require('gulp-webpack');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDev = require('webpack-dev-middleware');
const fs = require('fs');

gulp.task('build', cb => {
    const config = require('./webpack.config.base.js');
    return gulp.src('')
        .pipe(gulpWebpack(config)).pipe(gulp.dest('dist'));
});

gulp.task('serve', cb => {
    const webpackConf = require('./webpack.config.js');
    const app = express();
    const compiler = webpack(webpackConf);
    app.use(webpackDev(compiler));
    app.use(webpackHotMiddleware(compiler));
    app.use('/xhr/', function(req, res) {
        console.log(req.path);
        var data = fs.readFileSync(req.path, 'utf-8');
        res.send(data);
    });
    app.listen('9200', '127.0.0.1', function() {
        console.log("listen: 9200");    
    });
});