#!/usr/bin/env node

"use strict";

let path = require("path");
let fs = require("fs");
let Transform = require("stream").Transform;
let zlib = require("zlib");
let CAF = require("caf");  
//let getStdin = require("get-stdin")
let util = require("util");
let args = require('minimist')(process.argv.slice(2), {
	boolean: [ "help", "in", "compress", "uncompress" ],
	string: [ "file" ]
});

processFile = CAF(processFile)

function streamComplete(stream) {
	return new Promise(function c(res) {
		stream.on("end", res);
	});
}

let BASE_PATH = path.resolve(
	process.env.BASE_PATH || __dirname
);

let OUTFILE = path.join(BASE_PATH, "out.txt");

if(process.env.HELLO) {
	console.log(process.env.HELLO);
}

if(args.help) {
	printHelp();
} else if(args.in || args._.includes("-")) {
	let tooLong = CAF.timeout(30, "Took too long!");
	processFile(tooLong, process.stdin)
	.catch(error);
} else if(args.file) {
	let stream = fs.createReadStream(path.join(BASE_PATH, args.file));
	let tooLong = CAF.timeout(30, "Took too long!");
	processFile(tooLong, stream).then(function () {
		console.log("Complete!");
	}).catch(error);
} else {
	error("Incorrect usage.", true);
}

function *processFile(signal, inStream) {
	let outStream = inStream;
	if(args.uncompress) {
		let gunzipStream = zlib.createGunzip();
		outStream = outStream.pipe(gunzipStream);
	}

	let upperStream = new Transform({
		transform(chunk, enc, cb) {
			this.push(chunk.toString().toUpperCase());
			cb();
		}
	});
	outStream = outStream.pipe(upperStream);

	if(args.compress) {
		let gzipStream = zlib.createGzip();
		outStream = outStream.pipe(gzipStream);
		OUTFILE = `${OUTFILE}.gz`;
	}

	let targetStream;
	if(args.out) {
		targetStream = process.stdout;
	} else {
		targetStream = fs.createWriteStream(OUTFILE);
	}

	outStream.pipe(targetStream);


	signal.pr.catch(function f() {
		outStream.unpipe(targetStream);
		outStream.destroy();		
	})

	yield streamComplete(outStream);
}


function error(msg, includeHelp = false) {
	console.error(msg);
	if(includeHelp) {
		console.log("");
		printHelp();
	}
}

function printHelp() {
	console.log("ex1 usage: ");
	console.log("  ex1.js --file={FILENAME}");
	console.log("");
	console.log("--help		print this help");
	console.log("--file={FILENAME}	process the file");
	console.log("--in, -		stdout the file");
	console.log("--out			print to stdout");
	console.log("--compress		gzip the output");
	console.log("--uncompress	un-gzip the output");
	console.log("");
}

