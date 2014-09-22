module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
          'src/css/main.css': 'src/sass/main.scss'       // 'destination': 'source'
        }
      }
    },

    cssmin: {
      add_banner: {
        options: {
          banner: '/* My minified css file */'
        },
        files: {
          'dist/css/custom.min.css' : ['src/css/custom.css'],
          'src/css/custom.min.css' : ['src/css/custom.css']
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        files: {
          'dist/js/custom.min.js' : 'src/js/custom.js',
          'src/js/custom.min.js' : 'src/js/custom.js',
        }
      }
    },

    watch: {
      files: ['src/js/custom.js', 'src/css/custom.css'],
      tasks: ['uglify', 'cssmin'],
    }
  });


  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass','cssmin','uglify']);

};