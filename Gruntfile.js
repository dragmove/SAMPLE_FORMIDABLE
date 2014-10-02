module.exports = function(grunt) {
    "use strict";

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
              options: {
                    port: 9001,
                    hostname: 'localhost',
                    base: '.',
                    keepalive: true
                }
            }
        },

        karma : {
           unit: {
            configFile: 'js/tests/karma.conf.js'
            // keepalive: true
            // autoWatch: true
           }
        },

        jasmine: {
            src: [],
            options: {
                vendor: []
            }
        },

        htmlConvert: {
            options: {
                // custom options, see below 
                rename: function(moduleName) {
                    var name = moduleName.replace('.tmpl.html', '').replace('../template/', '');
                    return name;
                },
                quoteChar: '\'',
                indentString: '',
                indentGlobal: '    ',   
            },
            mytemplate: {
              src: ['template/**/*.tmpl.html'],
              dest: 'js/template/tmpl.js'
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-html-convert');

    grunt.registerTask('tmpl', ['htmlConvert']);
    grunt.registerTask('default', []);
};






