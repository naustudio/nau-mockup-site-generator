'use strict';
// through2 is a thin wrapper around node transform streams
var through = require('through2');
var fs = require('fs');
var fm = require('front-matter');
var _ = require('lodash');

// var PluginError = gutil.PluginError;

// consts
// var PLUGIN_NAME = 'gulp-project-folder';


// plugin level function (dealing with files)
function gulpProjectFolder() {

	// prefixText = new Buffer(prefixText); // allocate ahead of time

	// creating a stream through which each file will pass
	var stream = through.obj(function(file, enc, cb) {
		var info, infoContent;
		var path = file.path;

		console.log(file, file.path);

		if (file.isNull()) {
			info = {
				project: path.substr(path.lastIndexOf('/') + 1) // get the folder name
			};

			console.log('Getting project info from info.txt if it exist');
			// This is project folder try reading the info.txt
			try {
				infoContent = fs.readFileSync(file.path + '/info.txt', {encoding: 'utf8'});
			} catch (err) {
				console.log('Can\'t open info.txt in', file.path);
			}

			// Example of return data
			// {
			// 	attributes: {
			// 		project: 'Project Name',
			// 		client: 'Client Name'
			// 	}
			// 	body: 'This is some content below last ---'
			// }
			if (infoContent) {
				_.extend(info, fm(infoContent).attributes);
			}
			console.log('info:', info);
			// adding projectInfo data to file object, for next task to consume
			file.projectInfo = info;
		}

		if (file.isBuffer()) {
			console.log('isBuffer');
		}

		if (file.isStream()) {

		}

		this.push(file);

		return cb();
	});

	// returning the file stream
	return stream;
}

// exporting the plugin main function
module.exports = gulpProjectFolder;