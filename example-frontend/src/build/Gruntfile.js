module.exports = function(grunt) {
	grunt.initConfig({
		app : {
			version: grunt.option('app-version') || grunt.fail.fatal("Missing option '--app-version'."),
			name: grunt.option('app-name') || grunt.fail.fatal("Missing option '--app-name'."),
		},
		
		bowerPath: 'app/bower_components/',
		sourcePath: 'webapp-src/',
		targetPath: 'webapp-dist/',
		banner: '<%= app.name %> <%= app.version %> (<%= grunt.template.today("yyyy-mm-dd") %>)',
		clean: ["<%= targetPath %>"],
		basename: '<%= targetPath %><%= app.name %>-<%= app.version %>',

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
