import { readFileSync, writeFileSync } from 'fs';

// Read File 'color_palette.json' and store it a varibale
const colorCodes = JSON.parse(readFileSync("assets/color_ palette.json","utf-8"));

// Create an Array for storing Random Colors
const randomColorPalette = [];

// Create an array for getting unique random number
let indexArray = [];

for(let i=0; i<5; i++) {
    let index = Math.floor(Math.random()*colorCodes.length);
    if(indexArray.indexOf(index) === -1) {
        indexArray.push(index);
        randomColorPalette.push(colorCodes[index]);
    }
}
   
// Write to 'randomized_color_palette.json'
writeFileSync("assets/randomized_color_palette.json", JSON.stringify(randomColorPalette));

// Read from 'randomized_color_palette.json' and store it in a variable
const newColorCodes = JSON.parse(readFileSync("assets/randomized_color_palette.json","utf-8"));

// Console Log the output
for(const element of newColorCodes) {
    console.log(element.color);
}