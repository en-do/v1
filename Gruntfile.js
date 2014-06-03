module.exports = function(grunt){
    grunt.initConfig({
        jade: {
            compile: {
                files: [{
                    cwd: 'source',
                    src: ['**/*.jade', '!partials/**/*.jade'],
                    dest: 'dest',
                    expand: true,
                    ext: '.html',
                }]
            },
            options: {
                pretty: true,
            }
        },
        concat: {
            /*options: {
                separator: ';',
            },*/
            dist: {
                src: [
                    'source/js/developer/**/*.js',
                ],
                dest: 'dest/js/_main.js',
            }
        },
        min: {
            dist: {
                options: {
                    'report': 'gzip'
                },
                files: [{
                    'src': 'dest/js/_main.js',
                    'dest': 'dest/js/_main.min.js'
                }]
            }
        },
        stylus: {
            compile: {
                options: {
                    compress: true,
                },
                files: {
                    'dest/css/_main.css': 'source/css/_main.styl'
                }
            }
        },
        cssmin: {
            dist: {
                src: 'dest/css/_main.css',
                dest: 'dest/css/_main.min.css'
            }
        },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'source/img',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dest/img',
        }]
      }
    },
    copy: {
        css: {
            files: [{
                cwd: 'source/css',
                src: ['**/*.css'],
                dest: 'dest/css',
                expand: true,
            }]
        },
        js: {
            files: [{
                cwd: 'source/js/vendor',
                src: ['**/*.js'],
                dest: 'dest/js/vendor',
                expand: true,
            }]
        },
        fonts: {
            files: [{
                cwd: 'source/fonts',
                src: ['**/*'],
                dest: 'dest/fonts',
                expand: true,
            }]
        },
        pixi: {
            files: [{
                cwd: 'source/pixi',
                src: ['**/*'],
                dest: 'dest/pixi',
                expand: true,
            }]
        },
    },
    watch: {
        livereload: {
            options: {
                livereload: true
            },
            files: ['dest/**/*'],
        },
        js: {
            files: ['source/js/**/*.js'],
            tasks: ['concat', 'min'],
        },
        css: {
            files: ['source/css/**/*.css'],
            tasks: ['copy:css'],
        },
        fonts: {
            files: ['source/fonts/**/*'],
            tasks: ['copy:fonts'],
        },
        jade: {
            files: ['source/**/*.jade', '!partials/**/*.jade'],
            tasks: ['jade'],
        },
        stylus: {
            files: ['source/css/**/*.styl'],
            tasks: ['stylus', 'cssmin'],
        },
        imagemin: {
            files: ['source/img/**/*.{png,jpg,gif}'],
            tasks: ['imagemin'],
        }
    },
    connect: {
      server: {
        options: {
          port: 3000,
          base: 'dest',
        }
      }
    },
  });

    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-yui-compressor');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-newer');
  grunt.registerTask('default', [
    'connect', 
    'newer:copy', 
    'newer:jade', 
    'newer:stylus',
    'newer:concat',
    'newer:min',
    'newer:cssmin',
    'newer:imagemin:dynamic',
    'watch', 
  ]);
};
