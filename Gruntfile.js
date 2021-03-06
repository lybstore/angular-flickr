module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				options: {
					style: 'compact'
				},
				files: {
					'app/styles/css/app.processed.css': 'app/styles/sass/app.processed.scss'
				}
			}
		},

		// CSS

		css: {
			files: ['css/*.scss'],
			tasks: ['sass'],
			options: {
				spawan: false,
			}
		},

		// WATCH

		watch: {
			css: {
				files: 'app/styles/sass/*.scss',
				tasks: ['sass'],
				options: {
					livereload: true,
				},
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');

};
