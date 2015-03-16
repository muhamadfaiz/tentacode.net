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
      'fontawesome': '<%= dirs.vendor %>/font-awesome',
      'blog': {
        'js': 'js',
        'less': 'less'
      },
      'built': {
        'js': 'web/built/js',
        'css': 'web/built/css',
        'fonts': 'web/built/fonts'
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

    // Copy
    copy: {
      fontawesome: {
        files: [
          // includes files within path
          {
            expand: true,
            cwd: '<%= dirs.fontawesome %>/fonts',
            src: '**',
            dest: '<%= dirs.built.fonts %>',
            filter: 'isFile'
          }
        ]
      }
    },

    // LESS
    less: {
      options: {
        compress: true,
        cleancss: true,
      },
      blog: {
        files: { '<%= dirs.built.css %>/blog.css': [
           '<%= dirs.fontawesome %>/css/*.css',
          '<%= dirs.blog.less %>/reset.less',
          '<%= dirs.blog.less %>/grid.less',
          '<%= dirs.blog.less %>/layout.less',
          '<%= dirs.blog.less %>/blog.less'
        ]}
      }
    },

    // Concatenation
    concat: {
      js: {
        src: [
          '<%= dirs.vendor %>/jquery/dist/jquery.min.js',
          '<%= dirs.blog.js %>/*.js',
        ],
        dest: '<%= dirs.built.js %>/blog.js'
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
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Callable tasks
  grunt.registerTask('default', [
    'copy',
    'less',
    'concat',
    'uglify',
  ]);
};