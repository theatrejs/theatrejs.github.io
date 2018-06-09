const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {

    'entry': './sources/index.js',
    'output': {

        'path': path.resolve(__dirname, 'docs/'),
        'filename': 'index.js'
    },
    'resolve': {

        'alias': {

            'assets': path.resolve(__dirname, 'sources/game/assets/'),
            'images': path.resolve(__dirname, 'sources/game/assets/images/'),
            'components': path.resolve(__dirname, 'sources/game/components/'),
            'scenes': path.resolve(__dirname, 'sources/game/scenes/'),
            'systems': path.resolve(__dirname, 'sources/game/systems/'),

            'core': path.resolve(__dirname, 'sources/theatre/core'),
            'modules': path.resolve(__dirname, 'sources/theatre/modules')
        }
    },
    'module': {

        'rules': [

            {
                'test': /\.png$/,
                'use': [

                    {'loader': 'url-loader'}
                ]
            }
        ]
    },

    'plugins': [

        // new UglifyJSPlugin()
    ]
};