module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			files: ["*.js", "lib/*.js", "test/*.js"],
			options: {
				esnext: true,
				globals: {
					jQuery: true
				}
			}
		},
		watch: {
			scripts: {
				files: ["*.js", "routes/*.js"],
				tasks: ["jshint"]
			}
		}
	});

	
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["jshint"]);
};