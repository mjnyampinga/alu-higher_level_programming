#!/usr/bin/node
const request = require('request');

const movieID = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const movie = JSON.parse(body);
    const characterUrls = movie.characters;
    const characters = [];

    const fetchCharacter = (characterUrl) => {
      request(characterUrl, (error, response, body) => {
        if (error) {
          console.error(error);
        } else {
          const character = JSON.parse(body);
          characters.push(character.name);

          if (characters.length === characterUrls.length) {
            characters.forEach((characterName) => {
              console.log(characterName);
            });
          }
        }
      });
    };

    characterUrls.forEach((characterUrl) => {
      fetchCharacter(characterUrl);
    });
  }
});
