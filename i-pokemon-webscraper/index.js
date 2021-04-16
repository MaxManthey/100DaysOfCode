#!/usr/bin/env node

"use strict";

let util = require("util");
let axios = require("axios");
let args = require('minimist')(process.argv.slice(2), {
	boolean: [ "help" ],
	string: [ "name" ],
	number: [ "level" ]
});

if(args.help) {
	printHelp();
} else if(args.name) {
	printPokemonInfo(args.name)
} else {
	error("Incorrect usage.", true);
}

function printPokemonInfo(name) {
	const level = args.level

	if(level) {
		console.log("\t", name, "   Level:", args.level)
	} else {
		console.log(name, " ")
	}
	
	let data = getPokemonData(name.toLowerCase())	

	console.log()
	console.log("Type:\t\t", "type")
	console.log("Strong against:\t", "strength")
	console.log("Weak against:\t", "weakness")
	
	//print level moves 
}

function getPokemonData(name) {
	const url = "https://pokemondb.net/pokedex/" + name

	axios(url)
		.then(response => {
			const html = response.data
			console.log(html)
		})
		.catch(console.error)
}

function error(msg, includeHelp = false) {
	console.error(msg);
	if(includeHelp) {
		console.log("");
		printHelp();
	}
}

function printHelp() {
	console.log("Pokemon finder usage usage: ");
	console.log("  index.js --name={NAME OF POKEMON}");
	console.log("");
	console.log("--help \t\t\t\t print this help");
	console.log("--name={NAME OF POKEMON} \t Details on Pokemon");
	console.log("--level={LEVEL OF POKEMON} \t Moves Pokemon can learn up to given level");
	console.log("");
}

