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
        'js': '<%= dirs.vendor %>/jquery',
      },
      'bootstrap': {
        'js': '<%= dirs.vendor %>/bootstrap/js',
        'less': '<%= dirs.vendor %>/bootstrap/less'
      },
      'blog': {
        'js': 'js',
        'less': 'less'
      }
    },

    src: {
      output: {
        'jquery': {
          'js': 'web/built/jquery/js/jquery.js'
        },
        'bootstrap': {
          'js': 'web/built/bootstrap/js/bootstrap.js',
          'css': 'web/built/bootstrap/css/bootstrap.css'
        },
        'blog': {
          'js': 'web/built/js/blog.js',
          'css': 'web/built/css/blog.css'
        }
      },

      input: {
        jquery: {
          'js': [
            '<%= dirs.jquery.js %>/jquery.min.js'
          ]
        },
        bootstrap: {
          'js': [
            '<%= dirs.bootstrap.js %>/dropdown.js',
            '<%= dirs.bootstrap.js %>/tooltip.js',
            '<%= dirs.bootstrap.js %>/collapse.js',
            '<%= dirs.bootstrap.js %>/transition.js',
            '<%= dirs.bootstrap.js %>/carousel.js'
          ],
          'less': [
            '<%= dirs.bootstrap.less %>/bootstrap.less'
          ]
        },
        blog: {
          'js': [
            '<%= dirs.blog.js %>/index.js'
          ],
          'less': [
            '<%= dirs.blog.less %>/index.less'
          ]
        }
      },
    },

    /********************************** Task **********************************/
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
      blog: {
        src: '<%= src.input.blog.js %>',
        dest: '<%= src.output.blog.js %>'
      },
      jquery: {
        src: '<%= src.input.jquery.js %>',
        dest: '<%= src.output.jquery.js %>'
      },
      bootstrap: {
        src: '<%= src.input.bootstrap.js %>',
        dest: '<%= src.output.bootstrap.js %>'
      }
    },

    // LESS
    less: {
      bootstrap: {
        files: { '<%= src.output.bootstrap.css %>': '<%= src.input.bootstrap.less %>'}
      },
      blog: {
        files: { '<%= src.output.blog.css %>': '<%= src.input.blog.less %>'}
      }
    },

    // Watch
    watch: {
      blogless: {
        files: ['<%= dirs.blog.less %>/*.less'],
        tasks: ['less:blog'],
        options: {
            spawn: false,
        },
      },
      blogjs: {
        files: ['<%= dirs.blog.js %>/*.js'],
        tasks: ['concat:blog'],
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

  // Callable tasks
  grunt.registerTask('default', [
    'bower', 
    'concat:jquery', 
    'less:bootstrap', 
    'concat:bootstrap', 
    'less:blog', 
    'concat:blog'
  ]);
};