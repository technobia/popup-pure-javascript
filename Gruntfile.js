module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dev: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'assets/css/style.min.css': 'assets/scss/main.scss'
                }
            }
        },
        watch: {
            scss: {
                files: ['assets/**/*.scss'],
                tasks: ['sass:dev']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['sass:dev']);
    grunt.registerTask('deploy', ['build', 'watch:scss']);

};