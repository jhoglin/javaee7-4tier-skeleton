module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bowerPath: 'bower_components/',
		sourcePath: 'src/main/webapp/',
		targetPath: 'target/webapp/',
		banner: '<%= pkg.name %> <%= pkg.version %> (<%= grunt.template.today("yyyy-mm-dd") %>)',
		clean: ["<%= targetPath %>"],
		basename: '<%= targetPath %><%= pkg.name %>-<%= pkg.version %>',

		uglify : {
			options: {
				banner: '/*! <%= banner %> */\n',
				sourceMap: false,
			},
			build: {
				src: [
					'<%= bowerPath %>angular/angular.min.js',
					'<%= sourcePath %>js/*.js',
				],
				dest: '<%= basename %>.min.js',
			}
		},
		cssmin : {
			options: {
				banner: '/* <%= banner %> */\n',
			},
			build: {
				src: [
					'<%= bowerPath %>bootstrap/dist/css/bootstrap.min.css',
					'<%= sourcePath %>css/*.css',
				],
				dest:  '<%= basename %>.min.css',
			}
		},
		htmlbuild: {
			dist: {
				src: '<%= sourcePath %>index.html',
				dest: '<%= targetPath %>',
				options: {
					beautify: true,
					styles: {
						app: {
							files: '<%= basename %>.min.css',
						}
					},
					scripts: {
						app: {
							files: '<%= basename %>.min.js',
						}
					}
				}
			}
		},
	})

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-html-build');

	grunt.registerTask('default', ['clean', 'uglify', 'cssmin', 'htmlbuild']);
}
