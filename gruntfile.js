module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                options: {
                    compress: true
                },
                files: {
                    './build/main.min.css': './build/main.min.css'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    './build/main.min.js': './src/main.js'
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
                    'build/index.html': 'src/index.html'
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
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './main.min.css'
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: './main.min.js'
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'build/'
                    }
                ]
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-replace')

    grunt.registerTask('default', ['watch'])
    grunt.registerTask('build', ['less', 'uglify', 'htmlmin','replace']);
}
