'use strict';

module.exports = {
    entry: {
        game: './app/main',
        phaser: './node_modules/phaser/build/phaser'
    },

    output: {
        filename: '[name].bundle.js',
        path: './public/dist'
    },

    // devtool: '#source-map',

    module: {
        loaders: [
            {
                test: /phaser\.js$/,
                loader: 'script-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.purs$/,
                loader: 'purs-loader',
                exclude: /node_modules/,
                query: {
                    psc: 'psa',
                    src: ['bower_components/purescript-*/src/**/*.purs',
                          'src/**/*.purs']
                }
            }
        ]
    }
};
