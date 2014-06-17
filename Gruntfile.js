module.exports = function(grunt){
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);
	grunt.initConfig({
		clean: ["dest"],
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

	grunt.registerTask('default', [
		'connect', 
		'newer:copy', 
		'newer:jade', 
		'newer:stylus',
		'newer:cssmin',
		'newer:imagemin:dynamic',
		'watch', 
	]);

	grunt.registerTask('product', [
		'clean',
		'copy:css',
		'copy:fonts',
		'jade', 
		'stylus',
		'cssmin',
		'imagemin:dynamic',
	]);
};
