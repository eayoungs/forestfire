module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // JavaScript
        concat: {
            // 2. Configuration for concatinating files goes here.
            dist: {
                src: [
                    'public/js/lib/*.js', // All JS in the libs folder
                    'js/main.js'  // This specific file
                ],
                dest: '.tmp/production.js',
            }
        },
        uglify: {
            build: {
                src: '.tmp/production.js',
                dest: 'public/js/production.min.js'
            }
        },
        // Style
        compass: {
            dist: {}
        },
        autoprefixer: {
            dist: {
                files: {
                    'public/stylesheets/style.css': '.tmp/style.css'
                }
            }
        },

        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['public/stylesheets/**/*.scss'],
                tasks: ['compass', 'autoprefixer'],
                options: {
                    spawn: false,
                }
            },
            scripts: {
                files: ['js/**/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                },
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify', 'compass', 'autoprefixer']);

};