module.exports = function(grunt) {
  'use strict';

  // Force use of Unix newlines
  grunt.util.linefeed = '\n';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bowerrc: grunt.file.readJSON('.bowerrc'),

    // Path configuration from Gruntfile.js
    dirs: {
      'vendor': '<%= bowerrc.directory %>',
      'jquery': {
        'js': '<%= dirs.vendor %>/jquery/dist',
      },
      'bootstrap': {
        'js': '<%= dirs.vendor %>/bootstrap/dist/js',
        'less': '<%= dirs.vendor %>/bootstrap/less/bootstrap.less'
      },
      'blog': {
        'js': 'js',
        'less': 'less'
      },
      'built': {
        'js': 'web/built/js',
        'css': 'web/built/css'
      }
    },

    // Bower
    bower: {
      install: {
        options: {
          targetDir: '<%= dirs.vendor %>',
          cleanTargetDir: true,
          layout: 'byComponent',
          install: true,
          copy: false,
          verbose: true
        }
      }
    },

    // Concatenation
    concat: {
      js: {
        src: [
          '<%= dirs.jquery.js %>/jquery.min.js',
          '<%= dirs.bootstrap.js %>/bootstrap.min.js',
          '<%= dirs.blog.js %>/*.js',
        ],
        dest: '<%= dirs.built.js %>/blog.js'
      },
    },

    // LESS
    less: {
      options: {
        compress: true,
        cleancss: true,
      },
      blog: {
        files: { '<%= dirs.built.css %>/blog.css': [
          '<%= dirs.bootstrap.less %>',
          '<%= dirs.blog.less %>/*.less'
        ]}
      }
    },

    // Uglify
    uglify: {
      blog: {
        files: {
          '<%= dirs.built.js %>/blog.js': ['<%= dirs.built.js %>/blog.js']
        }
      }
    },

    // Watch
    watch: {
      less: {
        files: ['<%= dirs.blog.less %>/*.less'],
        tasks: ['less'],
        options: {
            spawn: false,
        },
      },
      js: {
        files: ['<%= dirs.blog.js %>/*.js'],
        tasks: ['concat'],
        options: {
            spawn: false,
        },
      },
    },
    
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Callable tasks
  grunt.registerTask('default', [
    'bower', 
    'concat',
    'uglify',
    'less',
  ]);
};