'use strict';

var items = [];

var express = require('express'),
	qs = require('querystring'),
	formidable = require('formidable'),

	app = express();
	app.get('/', function(req, res) {
		show(res);
	});

	app.post('/', function(req, res) {
		upload(req, res);
	});

var server = app.listen(52273, function() {
	console.log('Listening on port %d', server.address().port);
});

function show(res) {
	var html = '<html><head><title>Todo List</title></head><body>' +
		'<h1>Upload File</h1>' +
			'<form action="/" enctype="multipart/form-data" method="post">' +
				'<p><input type="text" name="name" /></p>' +
				'<p><input type="file" name="file" /></p>' +
				'<p><input type="submit" value="Upload" /></p>' +
			'</form></body></html>';

	res.setHeader('Content-Type', 'text/html');
	res.setHeader('Content-Length', Buffer.byteLength(html));
	res.end(html);
}

function upload(req, res) {
	if( !isFormData(req) ) {
		res.statusCode = 400;
		res.end('Bad Request : expecting multipart/form-data');
		return;
	}

	var form = new formidable.IncomingForm();
	form.encoding = 'utf-8';

	//upload directory setting
	form.uploadDir = __dirname + '/uploadFiles'; //default is os.tmpDir()

	// If you want the files written to form.uploadDir to include the extensions of the original files, set this property to true.
	form.keepExtensions = true;
	form.hash = 'sha1'; //or 'md5'
	
	form.on('field', function(field, value) {
		console.log('field, value:', field, value);
	});
	form.on('fileBegin', function(name, file) {
		// file.path = form.uploadDir + '/' + file.name;
	});
	form.on('file', function(name, file) {
		console.log('name, file :', name, file);
	});
	form.on('progress', function(bytesReceived, bytesExpected) {
		var percent = Math.floor(bytesReceived / bytesExpected * 100);
		console.log('percent :', percent);
	});
	form.on('error', function(error) {
		throw error;
	});
	form.on('aborted', function() {
		console.log('aborted');
	});
	form.on('end', function() {
		res.end('upload complete!');
	});
	form.parse(req);

	function isFormData(req) {
		var type = req.headers['content-type'] || '';
		return -1 != type.indexOf('multipart/form-data')
	}
}


