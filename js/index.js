const http = require("http");
const fs = require("fs");

const colorCodes = JSON.parse(fs.readFileSync("assets/color_ palette.json","utf-8"));
const randomColorPalette = [];
for(let i=0; i<5; i++) {
    let index = Math.floor(Math.random()*colorCodes.length);
    randomColorPalette.push(colorCodes[index]);
}
    
fs.writeFileSync("assets/randomized_color_palette.json", JSON.stringify(randomColorPalette));

const newColorCodes = JSON.parse(fs.readFileSync("assets/randomized_color_palette.json","utf-8"));
for(const element of newColorCodes) {
    console.log(element.color);
}