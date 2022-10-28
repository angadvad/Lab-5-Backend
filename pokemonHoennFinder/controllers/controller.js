'use strict'
const { json } = require("express");
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));


exports.fetchHoennPokemon = (req, res) => {
  let url_data = [];
  let pokemon_name_data = [];

  try {
    fetch('https://pokeapi.co/api/v2/pokedex/hoenn')
      .then((res) => res.json())
      .then((json) => {
        //excellent - the controller is a perfect place to filter the json from an external API into a better format for your app
        json.pokemon_entries.forEach(item => {
          let url = item.pokemon_species.url;
          url = url.replace('-species', '');
          let str = item.pokemon_species.name.charAt(0).toUpperCase() + item.pokemon_species.name.slice(1);
          url_data.unshift(url);
          pokemon_name_data.unshift(str);
        });
        console.log(pokemon_name_data)
        res.status(200);
        res.json({ success: true, data: { url_data, pokemon_name_data } });
      });


  } catch (e) {
    res.status(400);
    res.json({ success: false, message: e.message });
    throw Error(e.message);
  }
};

exports.fetchPokemon = (req, res) => {
  let url = req.query.url;

  try {
    fetch(url)
      .then(response => response.json())
      .then(function (pokeData) {
        res.status(200);
        let id = pokeData.id;
        let name = pokeData.name;
        let types = pokeData.types;
        console.log({id, name, types, url})
        res.json({ success: true, data: {id, name, types, url} });
      }
      )


  } catch (e) {
    res.status(400);
    res.json({ success: false, message: e.message });
    throw Error(e.message);
  }
};
