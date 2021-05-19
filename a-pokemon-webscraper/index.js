#!/usr/bin/env node

"use strict";

let util = require("util");
let axios = require("axios");
let cheerio = require("cheerio");
let args = require('minimist')(process.argv.slice(2), {
	boolean: [ "help" ],
	string: [ "name" ],
	//number: [ "level" ]
});

if(args.help) {
	printHelp();
} else if(args.name) {
	getPokemonData(args.name)
} else {
	error("Incorrect usage.", true);
}

function printPokemonInfo(data) {
	//const level = args.level

	//if(level) {
	//	console.log("\t", data.name, "   Level:", args.level)
	//} else {
		console.log(data.name, " ")
	//}
	
	// let data = await getPokemonData(name.toLowerCase())	
	// console.log("dexo: ", data.pokedexNo)

	console.log()
	console.log("National No.:\t", data.pokedexNo)
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
			const $ = cheerio.load(html)
    		const num = $('td > strong', html).text()
			// const type = $('.type-icon', html).text()
			const typeHtml = $('.vitals-table > tr > td > .type-icon', html)
			
			// typeHtml.each(function() {		
			// })

			// maybe use puppeteer instead for type?

			// console.log("nummmo", num.text())
			console.log("type", typeHtml)
			printPokemonInfo({
				name: name,
				pokedexNo: num.substring(0,3)
			})
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
	console.log("resource 1: https://pusher.com/tutorials/web-scraper-node")
	console.log("resource 2: https://www.freecodecamp.org/news/the-ultimate-guide-to-web-scraping-with-node-js-daa2027dcd3/")
	console.log("Pokemon finder usage usage: ");
	console.log("  index.js --name={NAME OF POKEMON}");
	console.log("");
	console.log("--help \t\t\t\t print this help");
	console.log("--name={NAME OF POKEMON} \t Details on Pokemon");
	//console.log("--level={LEVEL OF POKEMON} \t Moves Pokemon can learn up to given level");
	console.log("");
}

