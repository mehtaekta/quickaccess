module.exports = function(grunt){

	// Load tasks from plugin
	grunt.loadNpmTasks('grunt-coffee');
	 grunt.loadNpmTasks('grunt-contrib-less');
	 grunt.loadNpmTasks('grunt-reload');

	// Project configuration.
	grunt.initConfig({
		reload: {
	        port: 5000,
	        proxy: {
	            host: 'localhost'
	        }
	    },
		less: {
	      dev: {
	        files: {
	          "public/css/style.css": "public/less/style.less"
	        }
	      },
	      prod: {
	        options: {
	          yuicompress: true
	        },
	        files: {
	          "public/css/style.css": "public/less/style.less"
	        }
	      }
	    },
	    concat: {
			vendor: {
				src: ['public/js/lib/jquery*.js', 
						'public/js/lib/underscore-*.js',
						'public/js/lib/underscore-string.js',
						'public/js/lib/modernizr*.js', 
						"public/js/lib/bootstrap/bootstrap-transition.js",
						"public/js/lib/bootstrap/bootstrap-collapse.js",
						"public/js/lib/bootstrap/bootstrap-button.js",
						"public/js/lib/bootstrap/bootstrap-modal.js",
						"public/js/lib/bootstrap/bootstrap-tab.js",
						"public/js/lib/bootstrap/bootstrap-tooltip.js",
						"public/js/lib/bootstrap/bootstrap-popover.js",
						"public/js/lib/bootstrap/bootstrap-dropdown.js",
						"public/js/lib/bootstrap/bootstrap-alert.js",
				      	'public/js/lib/moment*.js', 		
				      	'public/js/lib/angular/angular.js',
				      	'public/js/lib/jquery-cookie.js'
						],
				dest: 'public/js/vendor-script.js'
			},
			app: {
				src: ['public/js/app/app.js',
					'public/js/app/services.js',
					'public/js/app/controllers.js',
					'public/js/app/directives.js',
					'public/js/app/filters.js'					
				],
				dest: 'public/js/app-script.js'
			},
		},
		min: {
			vendor: {
				src: [ '<config:concat.vendor.dest>' ],
				dest: 'public/js/vendor-script.js'
			},
			app: {
				src: [ '<config:concat.app.dest>' ],
				dest: 'public/js/app-script.js'
			}
		},
		lint: {
			files: [ // some example files
                'grunt.js',
                '<config:concat.vendor.src>',
                '<config:concat.app.src>'
            ],
            options: {
            	errorsOnly: true
            	// log: '/log/error.log'
            }
		},
		shell: {
			killNode:{
				command: "kill cmd.exe",
        		stdout: true,
        		failOnError: true
			}
		},
	    watch: {
		    less: {
				files: 'public/less/**/*.less',
				tasks: ['less:dev']
			},
			concat: {
				files: ['<config:concat.vendor.src>', '<config:concat.app.src>'],
				tasks: ['concat']
			}
		},
	});

	grunt.registerTask('default', ['less', 'concat', 'less:dev', 'watch']);
	
}