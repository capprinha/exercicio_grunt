module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    './build/main.min.css': './src/main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    '../build/main.min.js': '../src/main.js'
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    '../build/index.html': '../src/index.html'
                }
            }
        },
        watch: {
            less: {
                files: ['src/main.less'],
                tasks: ['less']
            },
            js: {
                files: ['src/main.js'],
                tasks: ['uglify']
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch'])
    grunt.registerTask('build', ['less', 'uglify', 'htmlmin']);
}
