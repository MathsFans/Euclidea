module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                expand: true,
                cwd: 'chrome-tool',
                src: ['*.js', '!*.min.js', '!jquery.js'],
                dest: 'chrome-tool',
                ext: '.min.js'
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'chrome-tool',
                    src: ['*.css', '!*.min.css'],
                    dest: 'chrome-tool',
                    ext: '.min.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['uglify', 'cssmin']);
};