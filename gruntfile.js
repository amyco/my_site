module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // uglify: {
    //   options: {
    //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    //   },
    //   build: {
    //     src: 'js/application.js',
    //     dest: 'js/application.min.js'
    //   }
    // },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'root/css/main.css': 'root/scss/main.scss'
        }
      }
    },
    watch: {
      // scripts: {
      //   files: 'js/application.js',
      //   tasks: ['uglify']
      // }, 
      css: {
        files: 'root/scss/*',
        tasks: ['sass'],
        options: {
          livereload: 8080
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};