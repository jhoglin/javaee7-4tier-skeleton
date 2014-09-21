module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		my: {
			srcDir: 'src/main/webapp/',
			dstDir: 'target/webapp/',
		},
		clean: ["<%= my.dstDir %>/webapp"],
		uglify : {
			options: {
				banner: '/*! <%= pkg.name %> <%= pkg.version %> '
					+ '(<%= grunt.template.today("yyyy-mm-dd") %>) */\n',
				sourceMap: false,
			},
			build: {
				src: '<%= my.srcDir %>js/*.js',
				dest: '<%= my.dstDir %><%= pkg.name %>-<%= pkg.version %>.min.js',
			}
		},
		htmlbuild: {
			dist: {
				src: '<%= my.srcDir %>index.html',
				dest: '<%= my.dstDir %>',
				options: {
					scripts: {
						app: {
							files: '<%= my.dstDir %><%= pkg.name %>-<%= pkg.version %>.min.js',
						}
					}
				}
			}
		},
	})

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-html-build');

	grunt.registerTask('default', ['clean', 'uglify', 'htmlbuild']);
}
